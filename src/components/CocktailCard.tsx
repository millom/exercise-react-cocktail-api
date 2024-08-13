import { ReactElement } from "react";
// import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ICocktailCardProps {
  cocktail: ICocktail | undefined;
}

export function CocktailCard({ cocktail }: ICocktailCardProps): ReactElement {
  // const { name, cocktail } = useCocktailsContext();
  return (
    <div className="card">
      {/* {name} */}
      <p>Concktail id: {cocktail?.id}</p>
      {/* <img src="../assets/poster.png" alt="" /> */}
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
