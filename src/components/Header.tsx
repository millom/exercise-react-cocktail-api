import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function Header(): ReactElement {
  const { name } = useCocktailsContext();
  return (
    <div className="header">
      {/* <img src="../assets/poster.png" alt="" /> */}
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
