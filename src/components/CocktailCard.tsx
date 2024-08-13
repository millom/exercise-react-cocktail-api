import { ReactElement } from "react";
// import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ICocktailCardProps {
  cocktail: ICocktail | undefined;
}

export function CocktailCard({ cocktail }: ICocktailCardProps): ReactElement {
  // const { name, cocktail } = useCocktailsContext();
  return (
    <div className="card" onClick={() => {}}>
      {/* {name} */}
      {/* <p>Concktail id: {cocktail?.id}</p> */}
      <img
        className="image"
        src={cocktail?.imgSrc}
        alt={"Cocktail:" + cocktail?.name}
      />
      <p className="card-text">{cocktail?.name}</p>
      {/* <img src="../assets/poster.png" alt="" /> */}
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
