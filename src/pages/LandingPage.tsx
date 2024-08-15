import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { CocktailCard } from "../components/CocktailCard";
import { useCocktailsContext } from "../hooks";

// interface ILandingPageProps {
//   cocktail: ICocktail;
// }

export function LandingPage(): ReactElement {
  let { cocktail, updateCocktail } = useCocktailsContext();

  const handleUpdateRandomClick: () => void = () => {
    const setRandomCocktail = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      // console.log(data);
      console.log("data.drinks", data.drinks);
      const cocktailArr: ICocktail[] = jsonToCocktails(data.drinks);
      console.log("cocktailArr", cocktailArr);
      // console.log(cocktailArr);
      [cocktail] = cocktailArr;
      console.log(cocktail);
      updateCocktail(cocktail);
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
