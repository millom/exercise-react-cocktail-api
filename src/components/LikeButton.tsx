import { ReactElement, MouseEvent } from "react";
import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ILikeButtonProps {
  cocktail: ICocktail | undefined;
}

export function LikeButton({ cocktail }: ILikeButtonProps): ReactElement {
  const { favorites, addFavorite, removeFavorite } = useCocktailsContext();

  const addOrRemoveLike: (event: MouseEvent<HTMLButtonElement>) => void = (
    event
  ) => {
    event.preventDefault();
    // console.log(
    //   "addOrRemoveLike",
    //   cocktail!.id in favorites!,
    //   cocktail,
    //   favorites
    // );
    // if (!cocktail) return;
    // favorites!.has(cocktail.id)
    favorites!.some((x) => x.id === cocktail!.id)
      ? removeFavorite!(cocktail!.id)
      : addFavorite!(cocktail!);
  };

  return (
    <div className="like-button">
      <button
        className={
          // cocktail && favoritesSet!.has(cocktail.id)
          favorites!.some((x) => x.id === cocktail!.id)
            ? "like-button1 is-like"
            : "like-button1"
        }
        onClick={(event) => addOrRemoveLike(event)}
      >
        {/* ❤️ {cocktail && favoritesSet!.has(cocktail.id) ? "Unlike" : "Like"} */}
        ❤️ {favorites!.some((x) => x.id === cocktail!.id) ? "Unlike" : "Like"}
      </button>
      <button onClick={() => console.log(cocktail)}>Cocktail</button>
      <button onClick={() => console.log(localStorage)}>Storage</button>
      <button
        onClick={() =>
          console.log(
            favorites,
            // cocktail!.id in favorites!,
            favorites!.some((x) => x.id === cocktail!.id)
          )
        }
      >
        Cocktail Set
      </button>
    </div>
  );
}
