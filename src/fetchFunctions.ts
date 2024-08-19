import { IJSON } from "./interfaces";

export const getJSonDataUsingFetch: (
  searchUrl: string
) => IJSON[] | any = async (searchUrl) => {
  const response = await fetch(searchUrl, { cache: "force-cache" });
  return (await response.json()).drinks;
};

export const getJSonDataUsingFetchNoCache: (
  searchUrl: string
) => IJSON[] | any = async (searchUrl) => {
  const response = await fetch(searchUrl, { cache: "no-store" });
  return (await response.json()).drinks;
};
