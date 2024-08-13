export interface ICocktail {
  idDrink: string;
  name: string;
  imgSrc: string;
  category: string;
  isAlcoholic: boolean;
  ingredients: string[15];
}

export interface ICocktailContext {
  name: string;
  cocktail: ICocktail | undefined;
  updateCocktail: (c: ICocktail) => void;
}
