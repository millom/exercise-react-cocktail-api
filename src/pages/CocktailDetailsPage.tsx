import { ReactElement, useEffect, useState } from "react";
// import { useCocktailsContext } from "../hooks";
import { useParams } from "react-router-dom";
import { ICocktail } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";

export function CocktailDetailsPage(): ReactElement {
  const params = useParams();

  let defaultCocktail: ICocktail | undefined;
  const [cocktail, setCocktail] = useState(defaultCocktail);
  // const { cocktail } = useCocktailsContext();
  // console.log(cocktail);
  useEffect(() => {
    const setCocktailById = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`
      );
      const data = await response.json();
      // console.log(data);

      const cocktailArr: ICocktail[] = jsonToCocktail(data.drinks);
      // console.log(cocktailArr);

      const newCocktail: ICocktail = cocktailArr[0];
      // const [newCocktail]: ICocktail = cocktailArr;
      setCocktail(newCocktail);
      console.log("new:", cocktail);
      // updateCocktail(cocktail);
    };

    setCocktailById();
  }, []);

  return (
    <div className="main-content">
      <h1 className="details-header">{cocktail?.name}</h1>
      <div className="details-container">
        <article className="details">
          <p></p>
          <p>Test {cocktail?.isAlcoholic.toString()}</p>
          <p>Test {cocktail?.category}</p>
        </article>
        <div className="details-image">
          <img
            className="image"
            src={cocktail?.imgSrc}
            alt={"Cocktail:" + cocktail?.name}
          />
        </div>
      </div>
    </div>
  );
}
