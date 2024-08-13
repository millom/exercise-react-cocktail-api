import { ReactElement, useRef } from "react";
import { ICocktail } from "../interfaces";

export function SearchPage(): ReactElement {
  const searchStringRef = useRef<HTMLInputElement>(null);

  const getCocktails: () => void = () => {
    const getRandomDrink = async () => {
      const response = await fetch(
        // "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        //   searchStringRef.current!.value
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
          searchStringRef.current!.value
        }`
      );
      const data = await response.json();
      console.log(data);
      // return data.drinks as ICocktail;
      return data;
    };

    getRandomDrink().then((data) => {
      console.log("ICocktail", data);
      console.log("ICocktail.drinks", data.drinks);
      // const cocktail: ICocktail[] = data.drinks.map((item) => {
      //   idDrink: item.idDrink;
      // });

      // Working
      const cocktail: ICocktail = {
        idDrink: data.drinks[0].idDrink,
      };
      const cocktail2: ICocktail[] = data.drinks.map((item: ICocktail) => {
        console.log("map:", typeof item, item);
        const cocktail: ICocktail = {
          idDrink: item.idDrink,
        };
        return cocktail;
      });

      // });
      // const cocktail: ICocktail = JSON.parse(data);
      console.log("cocktail", cocktail);
      console.log("cocktail2", cocktail2);
    });
  };

  return (
    <div className="main-content">
      <h1>SearchPage</h1>
      <p>SearchPage 2</p>
      <input
        id="search-string"
        type="text"
        ref={searchStringRef}
        value={"margarita"}
      />
      <button onClick={() => getCocktails()}>Search</button>
    </div>
  );
}
