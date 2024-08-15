import { ReactElement, useRef, MouseEvent } from "react";
import { useCocktailsContext } from "../hooks";
import { IJSON } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { getJSonDataUsingFetch } from "../fetchFunctions";

export function SerachForm(): ReactElement {
  const { updateCocktails, baseUrl } = useCocktailsContext();
  const searchNameRef = useRef<HTMLInputElement>(null);
  const searchCategoryRef = useRef<HTMLInputElement>(null);
  const searchGlassTypeRef = useRef<HTMLInputElement>(null);
  const searchNameCheckRef = useRef<HTMLInputElement>(null);
  const searchCategoryCheckRef = useRef<HTMLInputElement>(null);
  const searchGlassTypeCheckRef = useRef<HTMLInputElement>(null);

  const handleSublit: (event: MouseEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");

    const updateFetchAndCocktails = async () => {
      let url: string = baseUrl + "search.php?";
      if (searchNameCheckRef.current?.checked) {
        url += `s=${searchNameRef.current?.value}`;
      }
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

      updateCocktails(jsonDrinks === null ? [] : jsonToCocktails(jsonDrinks));
    };

    updateFetchAndCocktails();
  };

  return (
    <>
      <form className="cocktail-container" onSubmit={handleSublit}>
        <div>
          <input
            type="checkbox"
            // ref={searchNameRef}
            // defaultValue="true"
            ref={searchNameCheckRef}
            checked
          />
          <label htmlFor="searchNameId">Name: </label>
          <input
            id="searchNameId"
            type="text"
            ref={searchNameRef}
            defaultValue={"margarita"}
          />
        </div>
        <div>
          <input
            type="checkbox"
            // ref={searchNameRef}
            // defaultValue="false"
            ref={searchCategoryCheckRef}
          />
          <label htmlFor="searchCategoryId">Category: </label>
          <input
            id="searchCategoryId"
            type="text"
            ref={searchCategoryRef}
            defaultValue={"margarita"}
          />
        </div>
        <div>
          <input
            type="checkbox"
            // ref={searchNameRef}
            // defaultValue="false"
            ref={searchGlassTypeCheckRef}
          />
          <label htmlFor="searchGlassTypeId">Glass type: </label>
          <input
            id="searchGlassTypeId"
            type="text"
            ref={searchGlassTypeRef}
            defaultValue={"margarita"}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
