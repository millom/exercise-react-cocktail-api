import { IJSON } from "./interfaces";

// const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getJSonDataUsingFetch: (
  searchUrl: string
) => IJSON[] | any = async (searchUrl) => {
  const response = await fetch(searchUrl, { cache: "force-cache" });
  // const data = await response.json();
  return (await response.json()).drinks;
};

export const getJSonDataUsingFetchNoCache: (
  searchUrl: string
) => IJSON[] | any = async (searchUrl) => {
  const response = await fetch(searchUrl, { cache: "no-store" });
  // const data = await response.json();
  return (await response.json()).drinks;
};
