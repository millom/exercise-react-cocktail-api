import {
  Children,
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

// export const CocktailContext = createContext<ICotailContext | undefined>(undefined);
export const CocktailContext = createContext<ICocktailContext>(
  {} as ICocktailContext
);

export function CocktailProvider({
  children,
}: ICocktailProviderProps): ReactElement {
  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
  const name = "Mikael";
  const searchItemsPerPage: number = 10;
  const [cocktail, setCocktail] = useState<ICocktail>();
  const defaultCocktails: ICocktail[] = [];
  const [cocktails, setCocktails] = useState(defaultCocktails);
  const [nonAlkoholic, setOnlyNonAlkoholic] = useState(false);

  // useEffect(() => {
  //   console.log("Provider:", cocktail);
  //   setCocktail(cocktail);
  // }, [cocktail]);

  const updateCocktail: (c: ICocktail | undefined) => void = (
    c: ICocktail | undefined
  ) => {
    setCocktail(c);
  };

  const updateCocktails: (c: ICocktail[]) => void = (c: ICocktail[]) => {
    setCocktails(c);
  };

  const updateNonAlkoholic: (nonAlkoholic: boolean) => void = (
    nonAlkoholic
  ) => {
    setOnlyNonAlkoholic(nonAlkoholic);
  };

  // const handleSearchCocktailsClick: (
  //   event: MouseEvent<HTMLFormElement>,
  //   searchParams: ISearchParams,
  //   ul: HTMLUListElement
  // ) => void = (event, searchParams, ul) => {
  //   event.preventDefault();
  //   console.log("handleSearchCocktailsClick");
  //   console.log(searchParams);

  //   // const ul: HTMLUListElement = document.querySelector(".paginate-menu")!;
  //   sendSetSelectedEvent(ul);

  //   // const updateCocktailList = async (searchParams: ISearchParams) => {
  //   const fetchSearch = async (searchParams: ISearchParams) => {
  //     const response = await fetch(
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
  //         // searchStringRef.current!.value
  //         searchParams.name
  //       }`,
  //       { cache: "force-cache" }
  //     );
  //     // const data = response.json();
  //     return response.json();
  //   }
  //   // // const newCocktailList: ICocktail[] = jsonToCocktail(data.drinks);
  //   // const newCocktailList: ICocktail[] = jsonToCocktail(data.drinks);
  //   // console.log("data:", data, data.drinks);

  //   //   if (data?.drinks === null) {
  //   //     setCocktailList([]);
  //   //     setPageCount(1);
  //   //     return;
  //   //   }

  //   //   setCocktailList(newCocktailList);
  //   //   setPageCount(Math.ceil(newCocktailList.length / searchItemsPerPage));
  //   //   console.log(pageCount);
  //   // };

  //   return fetchSearch(searchParams);
  // };

  const defaultFavorites: ICocktail[] = [];
  const [favorites, setFavorites] = useState(defaultFavorites);
  const defaultFavoritesSet: Set<string> = new Set<string>();
  const [favoritesSet, setFavoritesSet] = useState(defaultFavoritesSet);
  // favoritesSet?: Set<string>;
  const addFavorite: (cocktail: ICocktail) => void = (cocktail) => {
    console.log("Add", localStorage.getItem(cocktail.id));
    console.log("localStorage", localStorage);
    // localStorage.removeItem(cocktail.id);

    if (localStorage.getItem(cocktail.id) !== null) return;
    console.log("addFavorite: pased");
    const favorite: ICocktail = {
      id: cocktail.id,
      name: cocktail.name,
      imgSrc: cocktail.imgSrc,
    };
    localStorage.setItem(cocktail.id, JSON.stringify(favorite));
    favorites.push(favorite);
    // const newFavorites = [...favorites];
    setFavorites([...favorites]);
    favoritesSet.add(favorite.id);
    setFavoritesSet(favoritesSet);
    console.log("favorites", favorites);
    console.log("favoritesSet", favoritesSet);
  };

  const removeFavorite: (id: string) => void = (id) => {
    console.log("Remove 1", localStorage, localStorage.getItem(id));
    if (localStorage.getItem(id) === null) return;
    console.log("localStorage", localStorage);
    localStorage.removeItem(id);
    // console.log("localStorage", localStorage);

    console.log("favorites", favorites);
    const newFavorites: ICocktail[] = favorites.filter(
      (obj: ICocktail) => obj.id !== id
    );
    setFavorites(newFavorites);
    console.log("newFavorites", newFavorites);

    favoritesSet.delete(id);
    setFavoritesSet(favoritesSet);
  };
  // removeFavorite?: (cocktail: ICocktail) => void;

  const values: ICocktailContext = {
    baseUrl,
    name,
    searchItemsPerPage,
    cocktail,
    updateCocktail,
    cocktails,
    updateCocktails,
    nonAlkoholic: nonAlkoholic,
    updateNonAlkoholic: updateNonAlkoholic,
    favorites,
    favoritesSet,
    addFavorite,
    removeFavorite,
  };

  return (
    <CocktailContext.Provider value={values}>
      {children}
    </CocktailContext.Provider>
  );
}
