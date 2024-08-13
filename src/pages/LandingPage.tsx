import { ReactElement, useEffect, useState } from "react";
import { ICocktail } from "../interfaces";
// import { jsonToCocktail, getCocktailsUsingFetch } from "../customFunctions";
import { fetchCocktails, jsonToCocktail } from "../customFunctions";

// const [cocktails, setCocktails] = useState([]);

export function LandingPage(): ReactElement {
  // const getCocktails = async () => {
  //   // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a") // WORKING
  //   await fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  //     // fetch("https://api.agify.io?name=meelad")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/random.php", {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //     Accept: "application/json",
  //     //   },
  //     // })
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  //     // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=m")
  //     .then(async (response) => {
  //       const data = await response.json();
  //       console.log("JSON:", data);
  //       return data;
  //     })
  //     .then((resData: ICocktial) => {
  //       console.log("Cocktail:", resData);
  //       // setCocktails(resData);
  //     });
  // };

  // const getCocktails: () => void = async () => {
  //   const cocktail2: ICocktail[] = await fetchCocktails(
  //     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //   );
  //   console.log("Func", cocktail2);
  // };
  const getCocktails: () => void = () => {
    const getRandomDrink = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      console.log(data);

      const cocktail2: ICocktail[] = jsonToCocktail(data.drinks);
      // const cocktail2: ICocktail[] = data.drinks.map((item: ICocktail) => {
      //   // (item: ICocktail) => {
      //   //   idDrink: item.idDrink;
      //   // }
      //   // console.log("map:", typeof item, item);

      //   const cocktail: ICocktail = {
      //     idDrink: item.idDrink,
      //   };
      //   return cocktail;

      //   // return {
      //   //   idDrink: item.idDrink,
      //   // };
      // });
      console.log(cocktail2);

      // return cocktail2;
    };

    getRandomDrink();

    // getRandomDrink().then((data) => {
    //   console.log("ICocktail", data);
    //   console.log("ICocktail.drinks", data.drinks);
    //   // const cocktail: ICocktail[] = data.drinks.map((item) => {
    //   //   idDrink: item.idDrink;
    //   // });

    //   // Working
    //   // const cocktail: ICocktail = {
    //   //   idDrink: data.drinks[0].idDrink,
    //   // };
    //   // const cocktail2: ICocktail[] = data.drinks.map((item: any) => {
    //   //   idDrink: item.idDrink;
    //   // });
    //   const cocktail2: ICocktail[] = data.drinks.map((item: ICocktail) => {
    //     // (item: ICocktail) => {
    //     //   idDrink: item.idDrink;
    //     // }
    //     // console.log("map:", typeof item, item);

    //     // const cocktail: ICocktail = {
    //     //   idDrink: item.idDrink,
    //     // };
    //     // return cocktail;

    //     return {
    //       idDrink: item.idDrink,
    //     };
    //   });

    // });
    // const cocktail: ICocktail = JSON.parse(data);
    // console.log("cocktail", cocktail);
    //   console.log("cocktail2", cocktail2);
    // });
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
      <button onClick={getCocktails}>Click</button>
    </div>
  );
}
