import { ReactElement, useEffect, useState } from "react";

// const [cocktails, setCocktails] = useState([]);

export function LandingPage(): ReactElement {
  const getCocktails = () => {
    fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
      // fetch("www.thecocktaildb.com/api/json/v1/1/random.php", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // })
      // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=m")
      .then((response) => {
        let data = response.json();
        console.log(data);
        return data;
      })
      .then((resData) => {
        console.log(resData);
        // setCocktails(resData);
      });
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
