import { ReactElement, useRef, useState, MouseEvent, useEffect } from "react";
import { ICocktail } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import { CocktailCard } from "../components/CocktailCard";

export function SearchPage(): ReactElement {
  const itemsPerPage: number = 10;
  const navigate = useNavigate();
  const searchStringRef = useRef<HTMLInputElement>(null);
  const defaultCocktailList: Array<ICocktail> = [];
  const [cocktailList, setCocktailList] = useState(defaultCocktailList);

  // const [page, setPage] = useState(0);
  // const [filterData, setFilterData] = useState();

  const [itemOffset, setItemOffset] = useState(0);
  // const [endOffset, setEndOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(defaultCocktailList);
  const [pageCount, setPageCount] = useState(0);
  const [initialPage, setInitialPage] = useState(0);
  // let endOffset: number = 0; // itemOffset + itemsPerPage;
  // let currentItems: ICocktail[] = []; //items.slice(itemOffset, endOffset);
  // let pageCount: number = // Math.ceil(items.length / itemsPerPage);

  const handleSearchCocktailsClick: (
    event: MouseEvent<HTMLFormElement>
  ) => void = (event) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");

    // setItemOffset(2);
    // setInitialPage(0);
    setInitialPage(-1);

    const ul: HTMLUListElement = document.querySelector(".paginate-menu")!;
    const clickEvent = new Event("click", {
      bubbles: true,
      cancelable: true,
    });
    ul?.childNodes[1].childNodes[0].dispatchEvent(clickEvent);
    // ul?.children[1].dispatchEvent(new Event("click"));
    // for (let i: number = 0; i < ul?.childElementCount; i++) {
    //   console.log("1", i, ul?.children[i]);
    //   ul?.children[i].classList.remove("selected");
    //   console.log("2", ul?.children[i].classList);
    // }
    // ul?.children[1].classList.add("selected");
    // ul?.children[1].children[0].;

    const updateCocktailList = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
          searchStringRef.current!.value
        }`,
        { cache: "force-cache" }
      );
      const data = await response.json();
      console.log("data:", data, data.drinks);
      // setInitialPage(0);
      if (data?.drinks === null) {
        setCocktailList([]);
        setPageCount(1);
        return;
      }

      const newCocktailList: ICocktail[] = jsonToCocktail(data.drinks);

      // setCocktailList([]);
      // setPageCount(0);
      setCocktailList(newCocktailList);
      setPageCount(Math.ceil(newCocktailList.length / itemsPerPage));
      console.log(pageCount);
    };

    updateCocktailList();
    // .then((data) => {
    //   console.log("ICocktail", data);
    //   console.log("ICocktail.drinks", data.drinks);
    //   // const cocktail: ICocktail[] = data.drinks.map((item) => {
    //   //   idDrink: item.idDrink;
    //   // });

    //   // Working
    //   // const cocktail: ICocktail = {
    //   //   id: data.drinks[0].idDrink,
    //   // };
    //   const cocktail2: ICocktail[] = data.drinks.map((item: ICocktail) => {
    //     console.log("map:", typeof item, item);
    //     const cocktail: ICocktail = {
    //       idDrink: item.idDrink,
    //     };
    //     return cocktail;
    //   });

    //   // });
    //   // const cocktail: ICocktail = JSON.parse(data);
    //   console.log("cocktail", cocktail);
    //   console.log("cocktail2", cocktail2);
    // });
  };

  useEffect(() => {
    console.log("Effect");
    const endOffset = itemOffset + itemsPerPage;
    // setEndOffset(itemOffset + itemsPerPage);

    // console.log("Effect", itemOffset, endOffset);
    // console.log("Effect", itemOffset, endOffset);
    const newCurrentItems = cocktailList.slice(itemOffset, endOffset);
    setCurrentItems(newCurrentItems);
    // setPageCount(Math.ceil(cocktailList.length / itemsPerPage));
    // console.log("Effect", itemOffset, endOffset);
    // console.log(cocktailList);
  }, [itemOffset, itemsPerPage, pageCount, cocktailList]);
  // useEffect(() => {
  //   setFilterData(
  //     currentItems.filter((item, index) => {
  //       return (index >= page * n) & (index < (page + 1) * n);
  //     })
  //   );
  // }, [page]);

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
        {/* <button onClick={() => handleSearchCocktailsClick()}>Search</button> */}
        <button type="submit">Search</button>
      </form>
      <div className="cocktail-container">
        <ul className="ul">
          {/* {cocktailList.map((cocktail) => ( */}
          {currentItems?.map((cocktail) => (
            // <CocktailCard cocktail={cocktail} />
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
          // onPageChange={(event) => setPage(event.selected)}
          pageRangeDisplayed={itemsPerPage}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className="paginate-menu"
          forcePage={initialPage}
          // onPageActive={() => {
          //   setInitialPage(0);
          // }}
          // initialPage={initialPage}
          // page={initialPage}
          // initialPage={initialPage}
        ></ReactPaginate>
      </div>
    </div>
  );
}
