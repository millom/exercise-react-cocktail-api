export interface IJSON {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
}

export interface ICocktail {
  id: string;
  name: string;
  imgSrc: string;
  category: string;
  isAlcoholic: boolean;
  ingredients: Array<string>;
}

export interface ICocktailContext {
  name: string;
  cocktail: ICocktail | undefined;
  updateCocktail: (c: ICocktail | undefined) => void;
}
