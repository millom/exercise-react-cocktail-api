import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function Header(): ReactElement {
  const { name } = useCocktailsContext();
  return (
    <>
      <h1>Header {name}</h1>
      <p>Header 2</p>
    </>
  );
}
