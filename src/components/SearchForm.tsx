import { ReactElement, useRef, MouseEvent, useEffect, useState } from "react";
import { useCocktailsContext } from "../hooks";
import { IJSON, IFilterParams } from "../interfaces";
import {
  simpleJsonToCocktails,
  getFilterParams,
  getSearchParams,
} from "../customFunctions";
import { getJSonDataUsingFetch } from "../fetchFunctions";
import { AlcoholicType } from "../enums";

export function SearchForm(): ReactElement {
  const {
    searchFormUiParams,
    updateSearchFormUiParams,
    updateCocktails,
    nonAlcoholic: nonAlkoholic,
    baseUrl,
  } = useCocktailsContext();
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

    const decideHowToHandleAlkoholic: () => AlcoholicType = () => {
      // Only show non Alkoholic, is set global in header
      // if (nonAlkoholic) {
      if (searchFormUiParams.onlyNonAlcoholicGlobal) {
        return AlcoholicType.NON_ALKOHOLIC;
      }

      // Alkoholic is not selected in search -> Don't care
      // if (!alcoholicCheckRef.current!.checked) {
      if (!searchFormUiParams.isAlcoholic.use) {
        return AlcoholicType.DONT_CARE;
      }

      // Alkoholix is set in search and must be handled
      // return alcoholicRef.current!.checked
      return searchFormUiParams.isAlcoholic.valueBool
        ? AlcoholicType.ALCOHOLIC
        : AlcoholicType.NON_ALKOHOLIC;
    };

    // const updateFetchAndCocktails = async () => {
    //   // let url: string = baseUrl + "search.php?";
    //   let url: string = baseUrl; // + "filter.php?";
    //   // let removeAlkoholic: boolean = nonAlkoholic;
    //   let showAlkoholicType = AlkoholicType.DONT_CARE;
    //   console.log(searchParams.alcoholicFilter);
    //   if (nameCheckRef.current?.checked) {
    //     // url += getSearchParams(nameRef.current!.value);
    //     url += getSearchParams(searchFormUiParams);
    //     showAlkoholicType = decideHowToHandleAlkoholic();
    //     console.log(
    //       "searchParams",
    //       searchParams,
    //       nonAlkoholic,
    //       showAlkoholicType as AlkoholicType,
    //       url
    //     );
    //     // const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);
    //     // removeAlkoholic ||=
    //     //   searchParams.alcoholicFilter !== undefined &&
    //     //   searchParams.alcoholicFilter!.use &&
    //     //   !searchParams.alcoholicFilter!.isAlcohol;
    //   } else {
    //     // url += getFilterParams(filterParams);
    //     url += getFilterParams(searchFormUiParams);
    //     // showAlkoholicType = nonAlkoholic
    //     showAlkoholicType = searchFormUiParams.onlyNonAlkoholicGlobal
    //       ? AlkoholicType.NON_ALKOHOLIC
    //       : AlkoholicType.DONT_CARE;
    //     console.log(
    //       "filterParams",
    //       filterParams,
    //       nonAlkoholic,
    //       showAlkoholicType as AlkoholicType,
    //       url
    //     );
    //     // removeAlkoholic =
    //     //   removeAlkoholic ||
    //     //   (searchParams.alcoholicFilter!.use &&
    //     //     !searchParams.alcoholicFilter!.isAlcohol);
    //   }
    //   console.log("updateFetchAndCocktails", url);
    //   const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

    //   updateCocktails(
    //     jsonDrinks === null || jsonDrinks === undefined
    //       ? []
    //       : // : simpleJsonToCocktails(jsonDrinks, showAlkoholicType)
    //         simpleJsonToCocktails(
    //           jsonDrinks,
    //           searchFormUiParams.onlyNonAlkoholicGlobal
    //         )
    //   );
    // };
    // updateFetchAndCocktails();

    const fetchSearchAndUpdateData = async () => {
      // let url: string = baseUrl + "search.php?";
      let url: string = baseUrl; // + searchFormUiParams.searchPhpFileName;
      url += getSearchParams(searchFormUiParams);
      console.log("fetchSearchAndUpdateData", url);
      const showAlkoholicType: AlcoholicType = decideHowToHandleAlkoholic();
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);
      updateCocktails(
        jsonDrinks === null || jsonDrinks === undefined
          ? []
          : simpleJsonToCocktails(jsonDrinks, showAlkoholicType)
      );
    };

    const fetchFilterhAndUpdateData = async () => {
      let url: string = baseUrl; // + searchFormUiParams.filterPhpFileName;
      url += getFilterParams(searchFormUiParams);
      console.log("fetchFilterhAndUpdateData", url);
      const showAlkoholicType: AlcoholicType = decideHowToHandleAlkoholic();
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);
      updateCocktails(
        jsonDrinks === null || jsonDrinks === undefined
          ? []
          : simpleJsonToCocktails(jsonDrinks, showAlkoholicType)
      );
    };
    // // let removeAlkoholic: boolean = nonAlkoholic;
    // // let showAlkoholicType = AlkoholicType.DONT_CARE;
    // console.log(searchParams.alcoholicFilter);
    // if (nameCheckRef.current?.checked) {
    //   // url += getSearchParams(nameRef.current!.value);
    //   showAlkoholicType = decideHowToHandleAlkoholic();
    //   console.log(
    //     "searchParams",
    //     searchParams,
    //     nonAlkoholic,
    //     showAlkoholicType as AlkoholicType,
    //     url
    //   );
    //   // const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);
    //   // removeAlkoholic ||=
    //   //   searchParams.alcoholicFilter !== undefined &&
    //   //   searchParams.alcoholicFilter!.use &&
    //   //   !searchParams.alcoholicFilter!.isAlcohol;
    // } else {
    //   // url += getFilterParams(filterParams);
    //   url += getFilterParams(searchFormUiParams);
    //   // showAlkoholicType = nonAlkoholic
    //   showAlkoholicType = searchFormUiParams.onlyNonAlkoholicGlobal
    //     ? AlkoholicType.NON_ALKOHOLIC
    //     : AlkoholicType.DONT_CARE;
    //   console.log(
    //     "filterParams",
    //     filterParams,
    //     nonAlkoholic,
    //     showAlkoholicType as AlkoholicType,
    //     url
    //   );
    //   // removeAlkoholic =
    //   //   removeAlkoholic ||
    //   //   (searchParams.alcoholicFilter!.use &&
    //   //     !searchParams.alcoholicFilter!.isAlcohol);
    // }
    // console.log("updateFetchAndCocktails", url);
    // const jsonDrinks: IJSON[] = await getJSonDataUsingFetch(url);

    // updateCocktails(
    //   jsonDrinks === null || jsonDrinks === undefined
    //     ? []
    //     : // : simpleJsonToCocktails(jsonDrinks, showAlkoholicType)
    //       simpleJsonToCocktails(
    //         jsonDrinks,
    //         searchFormUiParams.onlyNonAlkoholicGlobal
    //       )
    // );
    // };

    if (nameCheckRef.current?.checked) {
      fetchSearchAndUpdateData();
    } else {
      fetchFilterhAndUpdateData();
    }
    // updateFetchAndCocktails();
  };

  // Set default value for nameCheckRef
  useEffect(() => {
    // Use name as default in search
    // setDisableFilterParams(true);
    // nameCheckRef.current!.checked = true;
    // searchParams.paramArray[0].use = true;
    // searchParams.paramArray[0].fieldValue = nameRef.current!.value;
    // searchParams.paramArray[0].fieldName =
    //   nameRef.current!.value.length > 1 ? "s" : "f";
    // searchParams.alcoholicFilter!.use = nonAlkoholic;
    // searchParams.alcoholicFilter!.isAlcohol = !nonAlkoholic;
    // setSearchParams(searchParams);
    // categoryCheckRef.current!.checked = false;
    // filterParams.paramArray[0].use = false;
    // filterParams.paramArray[0].fieldValue = categoryRef.current!.value;
    // glassTypeCheckRef.current!.checked = false;
    // filterParams.paramArray[1].use = false;
    // filterParams.paramArray[1].fieldValue = glassTypeRef.current!.value;
    // alcoholicRef.current!.checked = !nonAlkoholic;
    // alcoholicCheckRef.current!.checked = nonAlkoholic;
    // filterParams.alcoholicFilter!.use = nonAlkoholic;
    // filterParams.alcoholicFilter!.isAlcohol = !nonAlkoholic;
    // setFilterParams(filterParams);
    nameCheckRef.current!.checked = searchFormUiParams.name.use;
    nameRef.current!.value = searchFormUiParams.name.valueStr as string;
    alcoholicCheckRef.current!.checked = searchFormUiParams.isAlcoholic.use;
    alcoholicRef.current!.checked = searchFormUiParams.isAlcoholic
      .valueBool as boolean;
    categoryCheckRef.current!.checked = searchFormUiParams.category.use;
    categoryRef.current!.value = searchFormUiParams.category.valueStr as string;
    glassTypeCheckRef.current!.checked = searchFormUiParams.glassTypes.use;
    glassTypeRef.current!.value = searchFormUiParams.glassTypes
      .valueStr as string;
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
            searchFormUiParams.name.use = event.target.checked;
            updateSearchFormUiParams(searchFormUiParams);
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
            searchFormUiParams.name.valueStr = event.target.value;
            updateSearchFormUiParams(searchFormUiParams);
          }}
          // defaultValue={"margarita"}
        />
      </div>
      <div className="hidden">
        <input
          type="checkbox"
          title="Selected or not"
          onChange={(event) => {
            filterParams.alcoholicFilter!.use =
              searchParams.alcoholicFilter!.use = event.target.checked;
            searchFormUiParams.isAlcoholic.use = event.target.checked;
            updateSearchFormUiParams(searchFormUiParams);
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
            searchFormUiParams.isAlcoholic.valueBool = event.target.checked;
            updateSearchFormUiParams(searchFormUiParams);
          }}
          // defaultValue="false"
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
            searchFormUiParams.category.use = event.target.checked;
            updateSearchFormUiParams(searchFormUiParams);
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
            searchFormUiParams.category.valueStr = event.target.value;
            updateSearchFormUiParams(searchFormUiParams);
          }}
          // defaultValue={"cocktail"}
        />
      </div>
      <div className={disableFilterParams ? "filter-param-disabled" : ""}>
        <input
          type="checkbox"
          title="Selected or not"
          disabled={disableFilterParams}
          onChange={(event) => {
            filterParams.paramArray[1].use = event.target.checked;
            searchFormUiParams.glassTypes.use = event.target.checked;
            updateSearchFormUiParams(searchFormUiParams);
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
            searchFormUiParams.glassTypes.valueStr = event.target.value;
            updateSearchFormUiParams(searchFormUiParams);
          }}
          // defaultValue={"Cocktail glass"}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
