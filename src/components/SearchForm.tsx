import { ReactElement, useRef, MouseEvent, useEffect, useState } from "react";
import { useCocktailsContext } from "../hooks";
import { IJSON, IFilterParams } from "../interfaces";
import {
  // jsonToCocktails,
  simpleJsonToCocktails,
  // getSearchParams,
  getFilterParams,
} from "../customFunctions";
import { getJSonDataUsingFetch } from "../fetchFunctions";

export function SearchForm(): ReactElement {
  const { updateCocktails, nonAlkoholic, baseUrl } = useCocktailsContext();
  const nameRef = useRef<HTMLInputElement>(null);
  const nameCheckRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const categoryCheckRef = useRef<HTMLInputElement>(null);
  const glassTypeRef = useRef<HTMLInputElement>(null);
  const glassTypeCheckRef = useRef<HTMLInputElement>(null);
  const alcoholicRef = useRef<HTMLInputElement>(null);
  const alcoholicCheckRef = useRef<HTMLInputElement>(null);
  const defaultFilterParams: IFilterParams = {
    command: "filter.php?",
    paramArray: [
      { name: "Category", fieldName: "c" },
      { name: "GlassType", fieldName: "g" },
    ],
    alcoholicFilter: { use: false, name: "Alcoholic", fieldName: "a" },
  };
  const [filterParams, setFilterParams] = useState(defaultFilterParams);
  const defaultSearchParams: IFilterParams = {
    command: "search.php?",
    paramArray: [{ use: true, name: "Name or first letter in name" }],
    alcoholicFilter: { use: false, name: "Alcoholic", fieldName: "?" },
  };
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [disableFilterParams, setDisableFilterParams] = useState(false);

  const handleSubmit: (event: MouseEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    console.log("handleSearchCocktailsClick");

    const updateFetchAndCocktails = async () => {
      // let url: string = baseUrl + "search.php?";
      let url: string = baseUrl; // + "filter.php?";
      let removeAlkoholic: boolean = nonAlkoholic;
      if (nameCheckRef.current?.checked) {
        console.log("searchParams", searchParams);
        url += getFilterParams(searchParams);
        removeAlkoholic |=
          searchParams.alcoholicFilter?.use &&
          !searchParams.alcoholicFilter?.isAlcohol;
      } else {
        console.log("filterParams", filterParams);
        url += getFilterParams(filterParams);
      }
      console.log(url);
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

      updateCocktails(
        jsonDrinks === null
          ? []
          : simpleJsonToCocktails(jsonDrinks, removeAlkoholic)
      );
    };

    updateFetchAndCocktails();
  };

  // Set default value for nameCheckRef
  useEffect(() => {
    setDisableFilterParams(true);
    nameCheckRef.current!.checked = true;
    searchParams.paramArray[0].use = true;
    searchParams.paramArray[0].fieldValue = nameRef.current!.value;
    searchParams.paramArray[0].fieldName =
      nameRef.current!.value.length > 1 ? "s" : "f";
    searchParams.alcoholicFilter!.use = nonAlkoholic;
    searchParams.alcoholicFilter!.isAlcohol = !nonAlkoholic;

    categoryCheckRef.current!.checked = false;
    filterParams.paramArray[0].use = false;
    filterParams.paramArray[0].fieldValue = categoryRef.current!.value;

    glassTypeCheckRef.current!.checked = false;
    filterParams.paramArray[1].use = false;
    filterParams.paramArray[1].fieldValue = glassTypeRef.current!.value;

    alcoholicRef.current!.checked = !nonAlkoholic;
    alcoholicCheckRef.current!.checked = nonAlkoholic;
    filterParams.alcoholicFilter!.use = nonAlkoholic;
    filterParams.alcoholicFilter!.isAlcohol = !nonAlkoholic;
  }, []);

  return (
    <form className="cocktail-container" onSubmit={handleSubmit}>
      <div>
        <input
          type="checkbox"
          title="Selected or not"
          onChange={(event) => {
            searchParams.paramArray[0].use = event.target.checked;
            setDisableFilterParams(event.target.checked);
          }}
          ref={nameCheckRef}
        />
        <label htmlFor="searchNameId">Name: </label>
        <input
          id="searchNameId"
          type="text"
          ref={nameRef}
          onChange={(event) => {
            searchParams.paramArray[0].fieldValue = event.target.value.replace(
              " ",
              "_"
            );
            searchParams.paramArray[0].fieldName =
              searchParams.paramArray[0].fieldValue.length > 1 ? "s" : "f";
          }}
          defaultValue={"margarita"}
        />
      </div>
      <div>
        <input
          type="checkbox"
          title="Selected or not"
          onChange={(event) => {
            filterParams.alcoholicFilter!.use =
              searchParams.alcoholicFilter!.use = event.target.checked;
          }}
          ref={alcoholicCheckRef}
        />
        <label htmlFor="searchGlassTypeId">Is Alocoholic: </label>
        <input
          id="searchGlassTypeId"
          type="checkbox"
          ref={alcoholicRef}
          onChange={(event) => {
            filterParams.alcoholicFilter!.isAlcohol =
              searchParams.alcoholicFilter!.isAlcohol = event.target.checked;
          }}
          defaultValue="false"
        />
      </div>
      <div className={disableFilterParams ? "filter-param-disabled" : ""}>
        <input
          type="checkbox"
          title="Selected or not"
          ref={categoryCheckRef}
          disabled={disableFilterParams}
          onChange={(event) => {
            filterParams.paramArray[0].use = event.target.checked;
          }}
        />
        <label htmlFor="searchCategoryId">Category: </label>
        <input
          id="searchCategoryId"
          type="text"
          ref={categoryRef}
          disabled={disableFilterParams}
          onChange={(event) => {
            filterParams.paramArray[0].fieldValue = event.target.value.replace(
              " ",
              "_"
            );
          }}
          defaultValue={"cocktail"}
        />
      </div>
      <div className={disableFilterParams ? "filter-param-disabled" : ""}>
        <input
          type="checkbox"
          title="Selected or not"
          disabled={disableFilterParams}
          onChange={(event) => {
            filterParams.paramArray[1].use = event.target.checked;
          }}
          ref={glassTypeCheckRef}
        />
        <label htmlFor="searchGlassTypeId">Glass type: </label>
        <input
          id="searchGlassTypeId"
          type="text"
          ref={glassTypeRef}
          disabled={disableFilterParams}
          onChange={(event) => {
            filterParams.paramArray[1].fieldValue = event.target.value.replace(
              " ",
              "_"
            );
          }}
          defaultValue={"Cocktail glass"}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
