import {
  ICocktail,
  IFilterParams,
  IJSON,
  ISearchFormUiParams,
} from "./interfaces";
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
          cocktail.tags?.push({
            id: (i + 1).toString(),
            name: tagArr[i],
          });
        }
      }
      let idCounter: number = 1;
      if (json.strIngredient1 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient1,
        });
      }
      if (json.strIngredient2 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient2,
        });
      }
      if (json.strIngredient3 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient3,
        });
      }
      if (json.strIngredient4 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient4,
        });
      }
      if (json.strIngredient5 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient5,
        });
      }
      if (json.strIngredient6 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient6,
        });
      }
      if (json.strIngredient7 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient7,
        });
      }
      if (json.strIngredient8 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient8,
        });
      }
      if (json.strIngredient9 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient9,
        });
      }
      if (json.strIngredient10 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient10,
        });
      }
      if (json.strIngredient11 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient11,
        });
      }
      if (json.strIngredient12 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient12,
        });
      }
      if (json.strIngredient13 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient13,
        });
      }
      if (json.strIngredient14 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient14,
        });
      }
      if (json.strIngredient15 !== null) {
        cocktail.ingredients?.push({
          id: (idCounter++).toString(),
          name: json.strIngredient15,
        });
      }
      idCounter = 1;
      if (json.strMeasure1 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure1,
        });
      }
      if (json.strMeasure2 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure2,
        });
      }
      if (json.strMeasure3 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure3,
        });
      }
      if (json.strMeasure4 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure4,
        });
      }
      if (json.strMeasure5 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure5,
        });
      }
      if (json.strMeasure6 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure6,
        });
      }
      if (json.strMeasure7 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure7,
        });
      }
      if (json.strMeasure8 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure8,
        });
      }
      if (json.strMeasure9 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure9,
        });
      }
      if (json.strMeasure10 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure10,
        });
      }
      if (json.strMeasure11 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure11,
        });
      }
      if (json.strMeasure12 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure12,
        });
      }
      if (json.strMeasure13 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure13,
        });
      }
      if (json.strMeasure14 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure14,
        });
      }
      if (json.strMeasure15 !== null) {
        cocktail.measurements?.push({
          id: (idCounter++).toString(),
          name: json.strMeasure15,
        });
      }
      return cocktail;
    });
};

export const simpleJsonToCocktails: (
  drinks: IJSON[],
  alkoholicType: AlkoholicType
) => ICocktail[] = (drinks, alkoholicType) => {
  return (
    drinks
      // .filter((json) => {
      //   // if (!alkoholicType) return true;
      //   console.log(json.strAlcoholic);
      //   console.log(json.strDrink);
      //   console.log(json.idDrink);
      //   console.log(json.strAlcoholic);
      //   console.log(
      //     alkoholicType,
      //     json.strAlcoholic,
      //     json.strAlcoholic!.toLowerCase() === "non alcoholic"
      //     // !nonAlkoholic && json.strAlcoholic === "Non_Alkoholic"
      //   );
      //   if (alkoholicType == AlkoholicType.NON_ALKOHOLIC) {
      //     return (
      //       json.strAlcoholic!.toLowerCase() === "non alcoholic" ||
      //       json.strAlcoholic!.toLowerCase() === "optional alcohol"
      //     );
      //   } else if (alkoholicType == AlkoholicType.ALKOHOLIC) {
      //     return json.strAlcoholic!.toLowerCase() === "alcoholic";
      //     // Cont care, show all
      //   } else {
      //     return true;
      //   }
      //   // return json.strAlcoholic === "Non_Alkoholic";
      // })
      .map((json: IJSON) => {
        return {
          id: json.idDrink,
          name: json.strDrink,
        };
      })
  );
};

export const getSearchParams: (uiParams: ISearchFormUiParams) => string = (
  uiParams
) => {
  return `${uiParams.searchPhpFileName}${
    uiParams.name.valueStr!.length == 1
      ? uiParams.name.paramNameShort
      : uiParams.name.paramName
  }=${uiParams.name.valueStr?.replace(" ", "_")}`;
};

// export const getFilterParams: (filterParams: IFilterParams) => string = (
export const getFilterParams: (uiParams: ISearchFormUiParams) => string = (
  // filterParams
  uiParams
) => {
  // let filterStr: string = filterParams.command;
  let filterStr: string = "filter.php?";
  let addedBefore: boolean = false;

  if (uiParams.name.use) {
    filterStr +=
      uiParams.name.valueStr!.length == 1
        ? uiParams.name.paramNameShort
        : uiParams.name.paramName;
    filterStr += "=";
    filterStr += uiParams.name.valueStr!.replace(" ", "_");
    addedBefore = true;
  }

  if (uiParams.category.use) {
    if (addedBefore) filterStr += "&";
    addedBefore = true;
    filterStr += uiParams.category.paramName;
    filterStr += "=";
    filterStr += uiParams.category.valueStr!.replace(" ", "_");
  }

  if (uiParams.glassTypes.use) {
    if (addedBefore) filterStr += "&";
    addedBefore = true;
    filterStr += uiParams.glassTypes.paramName;
    filterStr += "=";
    filterStr += uiParams.glassTypes.valueStr!.replace(" ", "_");
  }

  if (uiParams.onlyNonAlkoholicGlobal) {
    if (addedBefore) filterStr += "&";
    addedBefore = true;
    filterStr += uiParams.isAlkoholic.paramName;
    filterStr += "=";
    filterStr += uiParams.isAlkoholic.falseValue;
  } else if (uiParams.isAlkoholic.use) {
    if (addedBefore) filterStr += "&";
    addedBefore = true;
    filterStr += uiParams.isAlkoholic.paramName;
    filterStr += "=";
    filterStr += uiParams.isAlkoholic.valueBool
      ? uiParams.isAlkoholic.trueValue
      : uiParams.isAlkoholic.falseValue;
  }

  // for (const param of filterParams.paramArray) {
  //   if (!param.use) continue;

  //   if (addedBefore) filterStr += "&";

  //   filterStr += `${param.fieldName}=${param.fieldValue}`;
  //   addedBefore = true;
  // }

  // if (filterParams.alcoholicFilter?.use) {
  //   if (addedBefore) filterStr += "&";
  //   filterStr += `${filterParams.alcoholicFilter.fieldName}=${
  //     filterParams.alcoholicFilter.isAlcohol ? "Alcoholic" : "Non_alcoholic"
  //   }`;
  // }

  return filterStr;
};
