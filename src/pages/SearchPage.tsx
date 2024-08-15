import { ReactElement, useRef, useState, MouseEvent, useEffect } from "react";
import { ICocktail, IJSON } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getJSonDataUsingFetch } from "../fetchFunctions";

function selectTheFirstPage() {
  const clickEvent = new Event("click", {
    bubbles: true,
    cancelable: true,
  });
  const ul: HTMLUListElement | null = document.querySelector(".paginate-menu");
  if (ul === null) return;
  ul.childNodes[1].childNodes[0].dispatchEvent(clickEvent);
}

export function SearchPage(): ReactElement {
  const itemsPerPage: number = 10;
  const navigate = useNavigate();
  const searchStringRef = useRef<HTMLInputElement>(null);
  const defaultCocktailList: Array<ICocktail> = [];
  const [cocktailList, setCocktailList] = useState(defaultCocktailList);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(defaultCocktailList);
  const [pageCount, setPageCount] = useState(0);

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
        setCocktailList([]);
        setPageCount(1);
        return;
      }

      const newCocktailList: ICocktail[] = jsonToCocktail(jsonDrinks);

      setCocktailList(newCocktailList);
      setPageCount(Math.ceil(newCocktailList.length / itemsPerPage));
      console.log(pageCount);
    };

    updateCocktailList();
  };

  useEffect(() => {
    console.log("Effect");
    const endOffset = itemOffset + itemsPerPage;
    const newCurrentItems = cocktailList.slice(itemOffset, endOffset);
    setCurrentItems(newCurrentItems);
  }, [itemOffset, itemsPerPage, pageCount, cocktailList]);

  const handlePageClick: (event: any) => void = (event: any) => {
    // event.preventDefault();
    const newOffset = (event.selected * itemsPerPage) % cocktailList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
      <div className="cocktail-container">
        <ul className="ul">
          {currentItems?.map((cocktail) => (
            <li
              key={cocktail.id}
              className="list-item"
              onClick={() => {
                navigate(`/details/${cocktail!.id}`);
              }}
            >
              {cocktail.name}
            </li>
          ))}
        </ul>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(event) => handlePageClick(event)}
          pageRangeDisplayed={itemsPerPage}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className={pageCount <= 1 ? "paginate-menu hidden" : "paginate-menu"}
        ></ReactPaginate>
      </div>
    </div>
  );
}
