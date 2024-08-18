import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ILikeButtonProps {
  cocktail: ICocktail | undefined;
}

export function LikeButton({ cocktail }: ILikeButtonProps): ReactElement {
  const { favoritesSet, addFavorite, removeFavorite } = useCocktailsContext();

  return (
    <>
      <button
        className={
          cocktail && cocktail.id in favoritesSet!
            ? "like-button is-like"
            : "like-button"
        }
      >
        ❤️ {cocktail && cocktail.id in favoritesSet! ? "Unlike" : "Like"}
      </button>
    </>
  );
}
