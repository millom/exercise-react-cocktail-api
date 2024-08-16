import { ICocktail, IFilterParams, IJSON } from "./interfaces";

// const mapJsonToStringJSon: (jsonArr: IJSON[]) => IJSON[] = (jsonArr) => {
//   return jsonArr.map((json: IJSON) => {
//     const jsonStrObj: IJSON = {
//       idDrink: json.idDrink,
//       strDrink: json.strDrink,
//       strAlcoholic: json.strAlcoholic,
//       strTags: json.strTags,
//       strGlass: json.strGlass,
//       strDrinkThumb: json.strDrinkThumb,
//       strCategory: json.strCategory,
//       strIngredient1: json.strIngredient1 !== null ? json.strIngredient1 : "",
//       strIngredient2: json.strIngredient2 !== null ? json.strIngredient1 : "",
//       strIngredient3: json.strIngredient3 !== null ? json.strIngredient1 : "",
//       strIngredient4: json.strIngredient4 !== null ? json.strIngredient1 : "",
//       strIngredient5: json.strIngredient5 !== null ? json.strIngredient1 : "",
//       strIngredient6: json.strIngredient6 !== null ? json.strIngredient1 : "",
//       strIngredient7: json.strIngredient7 !== null ? json.strIngredient1 : "",
//       strIngredient8: json.strIngredient8 !== null ? json.strIngredient1 : "",
//       strIngredient9: json.strIngredient9 !== null ? json.strIngredient1 : "",
//       strIngredient10: json.strIngredient10 !== null ? json.strIngredient1 : "",
//       strIngredient11: json.strIngredient11 !== null ? json.strIngredient1 : "",
//       strIngredient12: json.strIngredient12 !== null ? json.strIngredient1 : "",
//       strIngredient13: json.strIngredient13 !== null ? json.strIngredient1 : "",
//       strIngredient14: json.strIngredient14 !== null ? json.strIngredient1 : "",
//       strIngredient15: json.strIngredient15 !== null ? json.strIngredient1 : "",
//     };
//     return jsonStrObj;
//   });
// };

export const jsonToCocktails: (drinks: IJSON[]) => ICocktail[] = (
  drinks: IJSON[]
) => {
  return drinks.map((json: IJSON) => {
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
      mesurements: [],
    };
    if (json.strTags !== null) {
      const tagArr: string[] = json.strTags.split(",");
      for (let i = 0; i < tagArr.length; i++) {
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
      cocktail.mesurements?.push(json["strMeasure1"]);
    }
    if (json["strMeasure2"] !== null) {
      cocktail.mesurements?.push(json["strMeasure2"]);
    }
    if (json["strMeasure3"] !== null) {
      cocktail.mesurements?.push(json["strMeasure3"]);
    }
    if (json["strMeasure4"] !== null) {
      cocktail.mesurements?.push(json["strMeasure4"]);
    }
    if (json["strMeasure5"] !== null) {
      cocktail.mesurements?.push(json["strMeasure5"]);
    }
    if (json["strMeasure6"] !== null) {
      cocktail.mesurements?.push(json["strMeasure6"]);
    }
    if (json["strMeasure7"] !== null) {
      cocktail.mesurements?.push(json["strMeasure7"]);
    }
    if (json["strMeasure8"] !== null) {
      cocktail.mesurements?.push(json["strMeasure8"]);
    }
    if (json["strMeasure9"] !== null) {
      cocktail.mesurements?.push(json["strMeasure9"]);
    }
    if (json["strMeasure10"] !== null) {
      cocktail.mesurements?.push(json["strMeasure10"]);
    }
    if (json["strMeasure11"] !== null) {
      cocktail.mesurements?.push(json["strMeasure11"]);
    }
    if (json["strMeasure12"] !== null) {
      cocktail.mesurements?.push(json["strMeasure12"]);
    }
    if (json["strMeasure13"] !== null) {
      cocktail.mesurements?.push(json["strMeasure13"]);
    }
    if (json["strMeasure14"] !== null) {
      cocktail.mesurements?.push(json["strMeasure14"]);
    }
    if (json["strMeasure15"] !== null) {
      cocktail.mesurements?.push(json["strMeasure15"]);
    }
    return cocktail;
  });
};

export const simpleJsonToCocktails: (drinks: IJSON[]) => ICocktail[] = (
  drinks: IJSON[]
) => {
  return drinks.map((json: IJSON) => {
    // console.log(typeof json, json);
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

  return filterStr;
};
