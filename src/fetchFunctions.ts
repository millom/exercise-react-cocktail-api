import { IJSON } from "./interfaces";

export const getJSonDataUsingFetch: (
  searchUrl: string
) => IJSON[] | any = async (searchUrl) => {
  const response = await fetch(searchUrl, { cache: "force-cache" });
  // const data = await response.json();
  return (await response.json()).drinks;
};
