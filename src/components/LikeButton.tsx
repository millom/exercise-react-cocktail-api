import { ReactElement, MouseEvent, useState, useEffect } from "react";
import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";

interface ILikeButtonProps {
  cocktail: ICocktail | undefined;
}

export function LikeButton({ cocktail }: ILikeButtonProps): ReactElement {
  // const { favorites, addFavorite, removeFavorite } = useCocktailsContext();
  const [isLike, setIsLike] = useState(false);

  const setFromInLocalStore = () => {
    console.log(
      cocktail?.id,
      "setFromInLocalStore:",
      cocktail?.id !== undefined ? cocktail!.id : "???"
    );
    setIsLike(
      localStorage.getItem(
        cocktail?.id !== undefined ? cocktail!.id : "???"
      ) !== null
    );
  };

  const addFavorite: () => void = () => {
    const favorite: ICocktail = {
      id: cocktail!.id,
      name: cocktail!.name,
      imgSrc: cocktail!.imgSrc,
    };
    localStorage.setItem(cocktail!.id, JSON.stringify(favorite));
  };

  const removeFavorite: () => void = () => {
    // if (!isLike) return;
    console.log("localStorage", localStorage);
    localStorage.removeItem(cocktail!.id);
  };

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
    isLike
      ? // favorites!.some((x) => x.id === cocktail!.id)
        removeFavorite!()
      : addFavorite!();
    setFromInLocalStore();
  };

  useEffect(() => {
    console.log("---- Like button Effect ----");
    setFromInLocalStore();
    console.log(isLike);
  }, [cocktail, isLike, setFromInLocalStore]);

  return (
    <div className="like-button">
      <button
        className={
          // cocktail && favoritesSet!.has(cocktail.id)
          // favorites!.some((x) => x.id === cocktail!.id)
          isLike ? "like-button1 is-like" : "like-button1"
        }
        onClick={(event) => addOrRemoveLike(event)}
      >
        {/* ❤️ {cocktail && favoritesSet!.has(cocktail.id) ? "Unlike" : "Like"} */}
        {/* ❤️ {favorites!.some((x) => x.id === cocktail!.id) ? "Unlike" : "Like"} */}
        ❤️
        {/* {" "} */}
        {isLike ? "Unlike" : "Like"}
      </button>
      <button onClick={() => console.log(cocktail)}>Cocktail</button>
      <button onClick={() => console.log(localStorage)}>Storage</button>
      <button
        onClick={() =>
          console.log(
            isLike,
            // cocktail!.id in favorites!,
            localStorage
          )
        }
      >
        Cocktail Set
      </button>
    </div>
  );
}
