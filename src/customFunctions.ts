import { ICocktail, IFilterParams, IJSON } from "./interfaces";
import { AlkoholicType } from "./enums";

export const jsonToCocktails: (
  drinks: IJSON[],
  nonAlkoholic: boolean
) => ICocktail[] = (drinks: IJSON[], nonAlkoholic: boolean) => {
  return drinks
    .filter((json) => {
      if (!nonAlkoholic) return true;
      return json.strAlcoholic === "Non_Alkoholic";
    })
    .map((json: IJSON) => {
      console.log(typeof json, json);
      const cocktail: ICocktail = {
        id: json.idDrink,
        name: json.strDrink,
        glass: json.strGlass,
        category: json.strCategory,
        isAlcoholic: json.strAlcoholic === "Alcoholic",
        imgSrc: json.strDrinkThumb,
        tags: [],
        ingredients: [],
        measurements: [],
      };
      if (json.strTags !== null) {
        const tagArr: string[] = json.strTags.split(",");
        for (let i = 0; i < tagArr.length; i++) {
          if (json.strTags.length == 0) continue;

          cocktail.tags?.push(tagArr[i]);
        }
      }
      if (json["strIngredient1"] !== null) {
        cocktail.ingredients?.push(json["strIngredient1"]);
      }
      if (json["strIngredient2"] !== null) {
        cocktail.ingredients?.push(json["strIngredient2"]);
      }
      if (json["strIngredient3"] !== null) {
        cocktail.ingredients?.push(json["strIngredient3"]);
      }
      if (json["strIngredient4"] !== null) {
        cocktail.ingredients?.push(json["strIngredient4"]);
      }
      if (json["strIngredient5"] !== null) {
        cocktail.ingredients?.push(json["strIngredient5"]);
      }
      if (json["strIngredient6"] !== null) {
        cocktail.ingredients?.push(json["strIngredient6"]);
      }
      if (json["strIngredient7"] !== null) {
        cocktail.ingredients?.push(json["strIngredient7"]);
      }
      if (json["strIngredient8"] !== null) {
        cocktail.ingredients?.push(json["strIngredient8"]);
      }
      if (json["strIngredient9"] !== null) {
        cocktail.ingredients?.push(json["strIngredient9"]);
      }
      if (json["strIngredient10"] !== null) {
        cocktail.ingredients?.push(json["strIngredient10"]);
      }
      if (json["strIngredient11"] !== null) {
        cocktail.ingredients?.push(json["strIngredient11"]);
      }
      if (json["strIngredient12"] !== null) {
        cocktail.ingredients?.push(json["strIngredient12"]);
      }
      if (json["strIngredient13"] !== null) {
        cocktail.ingredients?.push(json["strIngredient13"]);
      }
      if (json["strIngredient14"] !== null) {
        cocktail.ingredients?.push(json["strIngredient14"]);
      }
      if (json["strIngredient15"] !== null) {
        cocktail.ingredients?.push(json["strIngredient15"]);
      }
      if (json["strMeasure1"] !== null) {
        cocktail.measurements?.push(json["strMeasure1"]);
      }
      if (json["strMeasure2"] !== null) {
        cocktail.measurements?.push(json["strMeasure2"]);
      }
      if (json["strMeasure3"] !== null) {
        cocktail.measurements?.push(json["strMeasure3"]);
      }
      if (json["strMeasure4"] !== null) {
        cocktail.measurements?.push(json["strMeasure4"]);
      }
      if (json["strMeasure5"] !== null) {
        cocktail.measurements?.push(json["strMeasure5"]);
      }
      if (json["strMeasure6"] !== null) {
        cocktail.measurements?.push(json["strMeasure6"]);
      }
      if (json["strMeasure7"] !== null) {
        cocktail.measurements?.push(json["strMeasure7"]);
      }
      if (json["strMeasure8"] !== null) {
        cocktail.measurements?.push(json["strMeasure8"]);
      }
      if (json["strMeasure9"] !== null) {
        cocktail.measurements?.push(json["strMeasure9"]);
      }
      if (json["strMeasure10"] !== null) {
        cocktail.measurements?.push(json["strMeasure10"]);
      }
      if (json["strMeasure11"] !== null) {
        cocktail.measurements?.push(json["strMeasure11"]);
      }
      if (json["strMeasure12"] !== null) {
        cocktail.measurements?.push(json["strMeasure12"]);
      }
      if (json["strMeasure13"] !== null) {
        cocktail.measurements?.push(json["strMeasure13"]);
      }
      if (json["strMeasure14"] !== null) {
        cocktail.measurements?.push(json["strMeasure14"]);
      }
      if (json["strMeasure15"] !== null) {
        cocktail.measurements?.push(json["strMeasure15"]);
      }
      return cocktail;
    });
};

export const simpleJsonToCocktails: (
  drinks: IJSON[],
  alkoholicType: AlkoholicType
) => ICocktail[] = (drinks, alkoholicType) => {
  return drinks
    .filter((json) => {
      // if (!alkoholicType) return true;
      console.log(
        alkoholicType,
        json.strAlcoholic,
        json.strAlcoholic === "Non alcoholic"
        // !nonAlkoholic && json.strAlcoholic === "Non_Alkoholic"
      );
      if (alkoholicType == AlkoholicType.NON_ALKOHOLIC) {
        return json.strAlcoholic === "Non alcoholic";
      } else if (alkoholicType == AlkoholicType.ALKOHOLIC) {
        return json.strAlcoholic === "Alcoholic";
        // Cont care, show all
      } else {
        return true;
      }
      // return json.strAlcoholic === "Non_Alkoholic";
    })
    .map((json: IJSON) => {
      return {
        id: json.idDrink,
        name: json.strDrink,
      };
    });
};

export const getSearchParams: (name: string) => string = (name) => {
  return `search.php?${name.length == 1 ? "f" : "s"}=${name}`;
};

export const getFilterParams: (filterParams: IFilterParams) => string = (
  filterParams
) => {
  let filterStr: string = filterParams.command;

  let addedBefore: boolean = false;
  for (const param of filterParams.paramArray) {
    if (!param.use) continue;

    if (addedBefore) filterStr += "&";

    filterStr += `${param.fieldName}=${param.fieldValue}`;
    addedBefore = true;
  }

  if (filterParams.alcoholicFilter?.use) {
    if (addedBefore) filterStr += "&";
    filterStr += `${filterParams.alcoholicFilter.fieldName}=${
      filterParams.alcoholicFilter.isAlcohol ? "Alcoholic" : "Non_Alcoholic"
    }`;
  }

  return filterStr;
};
