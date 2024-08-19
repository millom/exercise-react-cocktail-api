import { createContext, ReactElement, ReactNode, useState } from "react";
import {
  ICocktail,
  ICocktailContext,
  ISearchFormUiParams,
  ISearchParams,
} from "../interfaces";

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
  const defaultSearchFormUiParams: ISearchFormUiParams = {
    onlyNonAlkoholicGlobal: false,
    name: {
      use: true,
      valueStr: "margarita",
    },
    isAlkoholic: {
      use: false,
      valueBool: false,
    },
    category: {
      use: false,
      valueStr: "cocktail",
    },
    glassTypes: {
      use: false,
      valueStr: "Cocktail glass",
    },
    ingredients: {
      use: false,
      valueStr: "lime",
    },
    // useName: true,
    // name: "margarita",
    // useIsAlkoholic: false,
    // isAlkoholic: false,
    // useCategory: false,
    // category: "cocktail",
    // useIngredients: false,
    // ingredients: "lime",
    // useGlassType: false,
    // glassType: "Cocktail glass",
  };

  // };
  const [searchFormUiParams, setsSarchFormUiParams] = useState(
    defaultSearchFormUiParams
  );

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
    searchFormUiParams.onlyNonAlkoholicGlobal = nonAlkoholic;
    updateSearchFormUiParams(searchFormUiParams);
  };

  const defaultFavorites: ICocktail[] = [];
  const [favorites, setFavorites] = useState(defaultFavorites);
  const defaultFavoritesSet: Set<string> = new Set<string>();
  const [favoritesSet, setFavoritesSet] = useState(defaultFavoritesSet);

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

    console.log("favorites", favorites);
    const newFavorites: ICocktail[] = favorites.filter(
      (obj: ICocktail) => obj.id !== id
    );
    setFavorites(newFavorites);
    console.log("newFavorites", newFavorites);

    favoritesSet.delete(id);
    setFavoritesSet(favoritesSet);
  };

  const updateSearchFormUiParams: (param: ISearchFormUiParams) => void = (
    param
  ) => {
    setsSarchFormUiParams(param);
  };

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
    searchFormUiParams,
    updateSearchFormUiParams,
  };

  return (
    <CocktailContext.Provider value={values}>
      {children}
    </CocktailContext.Provider>
  );
}
