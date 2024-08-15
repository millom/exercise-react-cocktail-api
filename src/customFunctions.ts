import { ICocktail, IJSON } from "./interfaces";

export const jsonToCocktails: (drinks: IJSON[]) => ICocktail[] = (
  drinks: IJSON[]
) => {
  return drinks.map((json: IJSON) => {
    const cocktail: ICocktail = {
      id: json.idDrink,
      name: json.strDrink,
      category: json.strCategory,
      isAlcoholic: json.strAlcoholic === "Alcoholic",
      imgSrc: json.strDrinkThumb,
      ingredients: [
        json.strIngredient1,
        json.strIngredient2,
        json.strIngredient3,
        json.strIngredient4,
        json.strIngredient5,
        json.strIngredient6,
        json.strIngredient7,
        json.strIngredient8,
        json.strIngredient9,
        json.strIngredient10,
        json.strIngredient11,
        json.strIngredient12,
        json.strIngredient13,
        json.strIngredient14,
        json.strIngredient15,
      ],
    };
    return cocktail;
  });
};
