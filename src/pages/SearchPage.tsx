import { ReactElement, useRef, useState, MouseEvent } from "react";
import { ICocktail } from "../interfaces";
import { jsonToCocktail } from "../customFunctions";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import { CocktailCard } from "../components/CocktailCard";

export function SearchPage(): ReactElement {
  const navigate = useNavigate();
  const searchStringRef = useRef<HTMLInputElement>(null);
  const defaultCocktailList: Array<ICocktail> = [];
  const [cocktailList, setCocktailList] = useState(defaultCocktailList);

  const handleSearchCocktailsClick: (
    event: MouseEvent<HTMLFormElement>
  ) => void = (event) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");
    const updateCocktailList = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
          searchStringRef.current!.value
        }`,
        { cache: "force-cache" }
      );
      const data = await response.json();
      console.log(data);
      const newCocktailList: ICocktail[] = jsonToCocktail(data.drinks);

      setCocktailList(newCocktailList);
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
          {cocktailList.map((cocktail) => (
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
          onPageChange={() => {}}
          pageRangeDisplayed={10}
          pageCount={5}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className="paginate-menu"
        ></ReactPaginate>
      </div>
    </div>
  );
}
