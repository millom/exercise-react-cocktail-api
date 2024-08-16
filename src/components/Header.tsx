import { ReactElement } from "react";
// import { useCocktailsContext } from "../hooks";

export function Header(): ReactElement {
  // const { name } = useCocktailsContext();
  return (
    <div className="header">
      {/* <img className="header-img" src="../assets/poster.png" alt="poster" /> */}
      <div className="header-img"></div>
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
