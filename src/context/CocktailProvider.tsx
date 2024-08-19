import { createContext, ReactElement, ReactNode, useState } from "react";
import {
  ICocktail,
  ICocktailContext,
  ISearchFormUiParams,
} from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

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
    searchPhpFileName: "search.php?",
    filterPhpFileName: "filter.php?",
    onlyNonAlcoholicGlobal: false,
    name: {
      use: true,
      paramName: "s",
      paramNameShort: "f",
      valueStr: "margarita",
    },
    isAlcoholic: {
      use: false,
      paramName: "a",
      valueBool: false,
      trueValue: "Alcoholic",
      falseValue: "Non_Alcoholic",
    },
    category: {
      use: false,
      paramName: "c",
      valueStr: "cocktail",
    },
    glassTypes: {
      use: false,
      paramName: "g",
      valueStr: "Cocktail glass",
    },
    ingredients: {
      use: false,
      paramName: "i",
      valueStr: "lime",
    },
  };

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
    searchFormUiParams.onlyNonAlcoholicGlobal = nonAlkoholic;
    updateSearchFormUiParams(searchFormUiParams);
  };

  const defaultFavorites: ICocktail[] = [];
  const [favorites, setFavorites] = useState(defaultFavorites);
  const defaultFavoritesSet: Set<string> = new Set<string>();
  const [favoritesSet, setFavoritesSet] = useState(defaultFavoritesSet);

  const addFavorite: (cocktail: ICocktail) => void = (cocktail) => {
    console.log("Add", localStorage.getItem(cocktail.id));
    console.log("localStorage", localStorage);

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
    nonAlcoholic: nonAlkoholic,
    updateNonAlcoholic: updateNonAlkoholic,
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
