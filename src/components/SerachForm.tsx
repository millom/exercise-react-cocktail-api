import { ReactElement, useRef, useState, MouseEvent, useEffect } from "react";
import { ICocktail, IJSON } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";
import { getJSonDataUsingFetch } from "../fetchFunctions";
import { useCocktailsContext } from "../hooks";

function selectTheFirstPage() {
  const clickEvent = new Event("click", {
    bubbles: true,
    cancelable: true,
  });
  const ul: HTMLUListElement | null = document.querySelector(".paginate-menu");
  if (ul === null) return;
  ul.childNodes[1].childNodes[0].dispatchEvent(clickEvent);
}

export function SerachForm(): ReactElement {
  let { updateCocktails } = useCocktailsContext();
  const searchStringRef = useRef<HTMLInputElement>(null);

  const handleSearchCocktailsClick: (
    event: MouseEvent<HTMLFormElement>
  ) => void = (event) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");

    selectTheFirstPage();

    const updateCocktailList = async () => {
      const url: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        searchStringRef.current!.value
      }`;
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

      if (jsonDrinks === null) {
        updateCocktails([]);
        return;
      }

      const newCocktailList: ICocktail[] = jsonToCocktail(jsonDrinks);
      updateCocktails(newCocktailList);
    };

    updateCocktailList();
  };

  return (
    <div className="main-content search-main">
      <form
        className="cocktail-container"
        onSubmit={handleSearchCocktailsClick}
      >
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
