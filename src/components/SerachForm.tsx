import { ReactElement, useRef, MouseEvent } from "react";
import { useCocktailsContext } from "../hooks";
import { IJSON } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { getJSonDataUsingFetch } from "../fetchFunctions";

export function SerachForm(): ReactElement {
  const { updateCocktails } = useCocktailsContext();
  const searchStringRef = useRef<HTMLInputElement>(null);

  const handleSublit: (event: MouseEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");

    const updateFetchAndCocktails = async () => {
      const url: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        searchStringRef.current!.value
      }`;
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

      updateCocktails(jsonDrinks === null ? [] : jsonToCocktails(jsonDrinks));
    };

    updateFetchAndCocktails();
  };

  return (
    <div className="main-content search-main">
      <form className="cocktail-container" onSubmit={handleSublit}>
        <label htmlFor="search-string">Name: </label>
        <input
          id="search-string"
          type="text"
          ref={searchStringRef}
          defaultValue={"margarita"}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
