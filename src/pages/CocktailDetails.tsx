import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function CocktailDetails(): ReactElement {
  const { cocktail } = useCocktailsContext();
  console.log(cocktail);

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
