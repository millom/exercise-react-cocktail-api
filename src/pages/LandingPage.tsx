import { ReactElement, useEffect, useState } from "react";
import { ICocktail, IJSON } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { CocktailCard } from "../components/CocktailCard";
import { useCocktailsContext } from "../hooks";
import { getJSonDataUsingFetchNoCache } from "../fetchFunctions";

// interface ILandingPageProps {
//   cocktail: ICocktail;
// }

export function LandingPage(): ReactElement {
  let { baseUrl, cocktail, updateCocktail } = useCocktailsContext();

  const handleUpdateRandomClick: () => void = () => {
    const setRandomCocktail = async () => {
      const url: string = `${baseUrl}random.php`;
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetchNoCache(url);

      updateCocktail(
        jsonDrinks === null ? undefined : jsonToCocktails(jsonDrinks)[0]
      );
      console.log("new:", cocktail);

      // const response = await fetch(
      //   "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      // );
      // const data = await response.json();
      // // console.log(data);
      // console.log("data.drinks", data.drinks);
      // const cocktailArr: ICocktail[] = jsonToCocktails(data.drinks);
      // console.log("cocktailArr", cocktailArr);
      // // console.log(cocktailArr);
      // [cocktail] = cocktailArr;
      // console.log(cocktail);
      // updateCocktail(cocktail);
    };

    setRandomCocktail();
  };

  useEffect(() => {
    console.log("cocktail", cocktail);
    if (!cocktail) handleUpdateRandomClick();
  }, []);

  return (
    <div className="main-content center-content">
      {/* <CocktailCard cocktail={cocktail} /> */}
      <CocktailCard cocktail={cocktail} />
      <button onClick={handleUpdateRandomClick}>New cocktail</button>
    </div>
  );
}
