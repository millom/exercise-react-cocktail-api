import { ReactElement, MouseEvent, useState, useEffect } from "react";
import { ICocktail } from "../interfaces";

interface ILikeButtonProps {
  cocktail: ICocktail | undefined;
}

export function LikeButton({ cocktail }: ILikeButtonProps): ReactElement {
  const [isLike, setIsLike] = useState(false);

  const setFromInLocalStore = () => {
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
    console.log("localStorage", localStorage);
    localStorage.removeItem(cocktail!.id);
  };

  const addOrRemoveLike: (event: MouseEvent<HTMLButtonElement>) => void = (
    event
  ) => {
    event.preventDefault();
    isLike ? removeFavorite!() : addFavorite!();
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
        className={isLike ? "like-button1 is-like" : "like-button1"}
        onClick={(event) => addOrRemoveLike(event)}
      >
        ❤️ {isLike ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
