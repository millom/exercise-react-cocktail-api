import { ReactElement, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ISearchResultListProps {
  updateCurrentItems: (newCurrentItems: ICocktail[]) => void;
}

export function PaginationMenu({
  updateCurrentItems: upadteCurrentItems,
}: ISearchResultListProps): ReactElement {
  const { cocktails, searchItemsPerPage } = useCocktailsContext();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

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

  const handlePageClick: (event: any) => void = (event: any) => {
    const newOffset = (event.selected * searchItemsPerPage) % cocktails.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    console.log("Effect");
    const endOffset = itemOffset + searchItemsPerPage;
    const newCurrentItems = cocktails.slice(itemOffset, endOffset);
    upadteCurrentItems(newCurrentItems);
  }, [itemOffset, pageCount]);

  useEffect(() => {
    setPageCount(Math.ceil(cocktails.length / searchItemsPerPage));
    selectTheFirstPage();
  }, [cocktails]);

  return (
    <>
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
    </>
  );
}
