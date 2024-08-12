import { useContext } from "react";
import { ICocktailContext } from "../interfaces";
import { CocktailContext } from "../context";

export function useCocktailsContext(): ICocktailContext {
  return useContext(CocktailContext);
}
