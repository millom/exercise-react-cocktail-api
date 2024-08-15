import ReactPaginate from "react-paginate";
import { useCocktailsContext } from "../hooks";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PaginationMenu(): ReactElement {
  const { cocktails, searchItemsPerPage } = useCocktailsContext();
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(cocktails);

  const selectTheFirstPage: () => void = () => {
    const clickEvent = new Event("click", {
      bubbles: true,
      cancelable: true,
    });
    const ul: HTMLUListElement | null =
      document.querySelector(".paginate-menu");
    if (ul === null) return;
    ul.childNodes[1].childNodes[0].dispatchEvent(clickEvent);
  };

  useEffect(() => {
    setPageCount(Math.ceil(cocktails.length / searchItemsPerPage));
    selectTheFirstPage();
  }, [cocktails]);

  useEffect(() => {
    console.log("Effect");
    const endOffset = itemOffset + searchItemsPerPage;
    const newCurrentItems = cocktails.slice(itemOffset, endOffset);
    setCurrentItems(newCurrentItems);
  }, [itemOffset, pageCount]);

  const handlePageClick: (event: any) => void = (event: any) => {
    const newOffset = (event.selected * searchItemsPerPage) % cocktails.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
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
          pageRangeDisplayed={searchItemsPerPage}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className={pageCount <= 1 ? "paginate-menu hidden" : "paginate-menu"}
        ></ReactPaginate>
      </div>
    </>
  );
}
