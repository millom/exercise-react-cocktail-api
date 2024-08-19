import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICocktail, IJSON } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { useCocktailsContext } from "../hooks";
import { getJSonDataUsingFetch } from "../fetchFunctions";
import { LikeButton } from "../components";

export function CocktailDetailsPage(): ReactElement {
  const params = useParams();
  const { nonAlkoholic, baseUrl } = useCocktailsContext();
  let defaultCocktail: ICocktail | undefined;
  const [cocktail, setCocktail] = useState(defaultCocktail);

  useEffect(() => {
    const setCocktailById = async () => {
      const url: string = `${baseUrl}lookup.php?i=${params.cocktailId}`;
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

      setCocktail(
        jsonDrinks === null
          ? undefined
          : // : jsonToCocktails(jsonDrinks, nonAlkoholic)[0]
            jsonToCocktails(jsonDrinks, false)[0]
        // jsonToCocktails(jsonDrinks, false)[0]
      );
      console.log(
        "CocktailDetailsPage Effect:",
        url,
        jsonDrinks,
        cocktail,
        nonAlkoholic
      );
    };

    setCocktailById();
  }, []);

  return (
    <div className="main-content">
      <h1 className="details-header">
        {cocktail?.name}
        <LikeButton cocktail={cocktail} />
      </h1>
      <div className="details-container">
        <article className="details">
          <div className="line-container">
            <label htmlFor="categoryId">Category: </label>
            <p id="categoryId">{cocktail?.category}</p>
          </div>
          <div className="line-container">
            <label htmlFor="glassId">Glass: </label>
            <p id="glassId">{cocktail?.glass}</p>
          </div>
          <div className="line-collection-container">
            <label htmlFor="ingredientsId">Ingredients: </label>
            <div id="ingredientsId" className="details-collection">
              {cocktail?.ingredients?.length &&
                cocktail?.ingredients?.length > 0 &&
                cocktail?.ingredients.map((c) => (
                  <p className="details-collection-item">{c}</p>
                ))}
            </div>
          </div>
          <div className="line-collection-container">
            <label htmlFor="mesurementsId">Mesurements: </label>
            <div id="mesurementsId" className="details-collection">
              {cocktail?.measurements?.length &&
                cocktail?.measurements?.length > 0 &&
                cocktail?.measurements.map((c) => (
                  <p className="details-collection-item">{c}</p>
                ))}
            </div>
          </div>
          <div className="line-collection-container">
            <label htmlFor="tagsId">Tags: </label>
            <div id="tagsId" className="details-collection">
              {cocktail?.tags?.length &&
                cocktail?.tags?.length > 0 &&
                cocktail?.tags.map((c) => (
                  <p className="details-collection-item">{c}</p>
                ))}
            </div>
          </div>
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
