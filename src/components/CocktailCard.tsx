import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function CocktailCard(): ReactElement {
  const { name, cocktail } = useCocktailsContext();
  return (
    <div className="card">
      {name}
      <p>Concktail id: {cocktail?.idDrink}</p>
      {/* <img src="../assets/poster.png" alt="" /> */}
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
