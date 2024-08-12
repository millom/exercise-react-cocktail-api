import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";

// const [cocktails, setCocktails] = useState([]);

export function LandingPage(): ReactElement {
  const getCocktails = async () => {
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a") // WORKING
    await fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
      // fetch("https://api.agify.io?name=meelad")
      // fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
      // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
      // fetch("www.thecocktaildb.com/api/json/v1/1/random.php", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // })
      // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=m")
      .then(async (response) => {
        const data = await response.json();
        console.log("JSON:", data);
        return data;
      })
      .then((resData: ICocktial) => {
        console.log("Cocktail:", resData);
        // setCocktails(resData);
      });
  };

  const getCocktails2: () => void = () => {
    const getRandomDrink = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      // return data.drinks as ICocktail;
      return data.drinks;
    };

    getRandomDrink().then((data: ICocktail) => console.log("ICocktail", data));
  };
  // useEffect(() => {
  //   fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/random.php", {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //     Accept: "application/json",
  //     //   },
  //     // })
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=m")
  //     .then((response) => {
  //       let data = response;
  //       console.log(data);
  //       return data.json();
  //     })
  //     .then((resData) => {
  //       console.log(resData);
  //       // setCocktails(resData);
  //     });
  // }, []);

  return (
    <div className="main-content">
      <h1>LandingPage</h1>
      <p>LandingPage 2</p>
      <button onClick={getCocktails2}>Click</button>
    </div>
  );
}
