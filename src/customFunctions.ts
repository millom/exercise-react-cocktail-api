import { ICocktail } from "./interfaces";

export const jsonToCocktail: (drinks: ICocktail[]) => ICocktail[] = (
  drinks: ICocktail[]
) => {
  return drinks.map((json: ICocktail) => {
    const cocktail: ICocktail = {
      idDrink: json.idDrink,
    };
    return cocktail;
  });
};
