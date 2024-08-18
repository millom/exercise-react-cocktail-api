import { ReactElement, useEffect, useState } from "react";
// import { CocktailProvider } from "../context";
import { ICocktail } from "../interfaces";
import { CocktailCard } from "../components/CocktailCard";

export function FavoritesPage(): ReactElement {
  const defaultFavorites: ICocktail[] = [];
  const [favorites, setFavorites] = useState(defaultFavorites);

  useEffect(() => {
    if (favorites.length > 0) return;

    for (const [key, value] of Object.entries(localStorage)) {
      console.log(key, value);
      // if ((value as ICocktail) === null || (value as ICocktail) === undefined) {
      //   continue;
      // }
      const maybeCocktail: ICocktail = JSON.parse(value) as ICocktail;

      if (
        maybeCocktail.id === undefined ||
        maybeCocktail.name === undefined ||
        maybeCocktail.imgSrc == undefined
      )
        continue;
      // console.log("Add item", key, value);
      console.log("--- Check Add item 2", value, favorites);
      if (favorites.includes(maybeCocktail)) continue;
      favorites.push(maybeCocktail);
    }
    setFavorites([...favorites]);
  }, []);

  return (
    <>
      <div className="main-content center-content">
        <h1 className="favorite-header">Favorites</h1>
        <div className="favorite-container">
          {favorites.map((c: ICocktail) => (
            <CocktailCard key={c.id} cocktail={c} />
          ))}
        </div>
      </div>
    </>
  );
}
