import { useCocktailsContext } from "../hooks";
import { ReactElement, useState } from "react";
import { PaginationMenu, SearchResultList } from ".";
import { ICocktail } from "../interfaces";

export function SearchResult(): ReactElement {
  const { cocktails } = useCocktailsContext();
  const [currentItems, setCurrentItems] = useState(cocktails);

  const updateCurrentItems: (newCurrentItems: ICocktail[]) => void = (
    newCurrentItems
  ) => {
    setCurrentItems(newCurrentItems);
  };

  return (
    <>
      <div className="cocktail-container search-result-layout">
        <SearchResultList currentItems={currentItems} />
        <PaginationMenu updateCurrentItems={updateCurrentItems} />
      </div>
    </>
  );
}
