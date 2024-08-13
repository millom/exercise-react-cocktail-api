import { ReactElement, useRef, useState } from "react";
import { ICocktail } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";
import { CocktailCard } from "../components/CocktailCard";

export function SearchPage(): ReactElement {
  const searchStringRef = useRef<HTMLInputElement>(null);
  const defaultCocktailList: Array<ICocktail> = [];
  const [cocktailList, setCocktailList] = useState(defaultCocktailList);

  const handleSearchCocktailsClick: () => void = () => {
    const updateCocktailList = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
          searchStringRef.current!.value
        }`
      );
      const data = await response.json();
      console.log(data);
      const newCocktailList: ICocktail[] = jsonToCocktail(data.drinks);

      setCocktailList(newCocktailList);
    };

    updateCocktailList();
    // .then((data) => {
    //   console.log("ICocktail", data);
    //   console.log("ICocktail.drinks", data.drinks);
    //   // const cocktail: ICocktail[] = data.drinks.map((item) => {
    //   //   idDrink: item.idDrink;
    //   // });

    //   // Working
    //   // const cocktail: ICocktail = {
    //   //   id: data.drinks[0].idDrink,
    //   // };
    //   const cocktail2: ICocktail[] = data.drinks.map((item: ICocktail) => {
    //     console.log("map:", typeof item, item);
    //     const cocktail: ICocktail = {
    //       idDrink: item.idDrink,
    //     };
    //     return cocktail;
    //   });

    //   // });
    //   // const cocktail: ICocktail = JSON.parse(data);
    //   console.log("cocktail", cocktail);
    //   console.log("cocktail2", cocktail2);
    // });
  };

  return (
    <div className="main-content">
      <h1>SearchPage</h1>
      <p>SearchPage 2</p>
      <input
        id="search-string"
        type="text"
        ref={searchStringRef}
        defaultValue={"margarita"}
      />
      <button onClick={() => handleSearchCocktailsClick()}>Search</button>
      {cocktailList.map((cocktail) => (
        <CocktailCard cocktail={cocktail} />
      ))}
    </div>
  );
}
