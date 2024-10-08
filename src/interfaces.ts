export interface SimpleJSON {
  idDrink: string;
  strDrink: string;
}

export interface IJSON {
  idDrink: string;
  strDrink: string;
  strTags: string;
  strGlass: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

interface IIngredient {
  id: string;
  name: string;
}

interface IMeasurement {
  id: string;
  name: string;
}

interface ITag {
  id: string;
  name: string;
}

export interface ICocktail {
  id: string;
  name: string;
  tags?: Array<ITag>;
  glass?: string;
  imgSrc?: string;
  category?: string;
  isAlcoholic?: boolean;
  ingredients?: Array<IIngredient>;
  measurements?: Array<IMeasurement>;
}

export interface ICocktailContext {
  name: string;
  searchItemsPerPage: number;
  cocktail: ICocktail | undefined;
  updateCocktail: (c: ICocktail | undefined) => void;
  cocktails: ICocktail[];
  updateCocktails: (c: ICocktail[]) => void;
  baseUrl: string;
  nonAlcoholic: boolean;
  updateNonAlcoholic: (nonAlcoholic: boolean) => void;
  favorites?: ICocktail[];
  favoritesSet?: Set<string>;
  addFavorite?: (cocktail: ICocktail) => void;
  removeFavorite?: (id: string) => void;
  searchFormUiParams: ISearchFormUiParams;
  updateSearchFormUiParams: (param: ISearchFormUiParams) => void;
}

export interface ISearchParams {
  command: "search.php?";
  isCategory: boolean;
  category: string;
  isGlassType: boolean;
  glassType: string;
}

export interface IFilterParam {
  name: string; // Identify parameter, not used in fetch
  fieldName?: string;
  fieldValue?: string;
  isAlcohol?: boolean;
  use?: boolean;
}

export interface IFilterParams {
  command: string;
  paramArray: Array<IFilterParam>;
  alcoholicFilter?: IFilterParam;
}

interface IFormUiParam {
  use: boolean;
  paramName?: string;
  paramNameShort?: string;
  valueStr?: string;
  valueBool?: boolean;
  trueValue?: string;
  falseValue?: string;
}

export interface ISearchFormUiParams {
  searchPhpFileName: string;
  filterPhpFileName: string;
  lookupPhpFileName?: string;
  onlyNonAlcoholicGlobal: boolean;
  name: IFormUiParam;
  isAlcoholic: IFormUiParam;
  category: IFormUiParam;
  ingredients: IFormUiParam;
  glassTypes: IFormUiParam;
}
