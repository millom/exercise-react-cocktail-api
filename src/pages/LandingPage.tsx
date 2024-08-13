import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";

export function LandingPage(): ReactElement {
  const getCocktails: () => void = () => {
    const getRandomDrink = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      // console.log(data);

      const cocktail2: ICocktail[] = jsonToCocktail(data.drinks);
      console.log(cocktail2);
    };

    getRandomDrink();
  };

  return (
    <div className="main-content">
      <h1>LandingPage</h1>
      <p>LandingPage 2</p>
      <button onClick={getCocktails}>Click</button>
    </div>
  );
}
