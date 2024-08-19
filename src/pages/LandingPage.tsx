import { ReactElement, useEffect } from "react";
import { IJSON } from "../interfaces";
import { jsonToCocktails } from "../customFunctions";
import { CocktailCard } from "../components/CocktailCard";
import { useCocktailsContext } from "../hooks";
import { getJSonDataUsingFetchNoCache } from "../fetchFunctions";

export function LandingPage(): ReactElement {
  const {
    nonAlcoholic: nonAlcoholic,
    baseUrl,
    cocktail,
    updateCocktail,
  } = useCocktailsContext();

  const handleUpdateRandomClick: () => void = () => {
    const setRandomCocktail = async () => {
      const url: string = `${baseUrl}random.php`;
      const jsonDrinks: IJSON[] = await getJSonDataUsingFetchNoCache(url);

      updateCocktail(
        jsonDrinks === null
          ? undefined
          : jsonToCocktails(jsonDrinks, nonAlcoholic)[0]
      );
      console.log("new:", cocktail);
    };

    setRandomCocktail();
  };

  useEffect(() => {
    console.log("cocktail", cocktail);
    if (!cocktail) handleUpdateRandomClick();
  }, []);

  return (
    <div className="main-content center-content">
      <CocktailCard cocktail={cocktail} />
      <button onClick={handleUpdateRandomClick}>New cocktail</button>
    </div>
  );
}
