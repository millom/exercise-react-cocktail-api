import { ReactElement } from "react";
import { ICocktail } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface ICocktailCardProps {
  cocktail: ICocktail | undefined;
}

export function CocktailCard({ cocktail }: ICocktailCardProps): ReactElement {
  const navigate = useNavigate();

  const handleGoToCocktailClick = () => {
    navigate(`/details/${cocktail!.id}`);
  };
  return (
    <div
      className="card"
      title="Click for more details"
      onClick={handleGoToCocktailClick}
    >
      <img
        className="image"
        src={cocktail?.imgSrc}
        alt={"Cocktail:" + cocktail?.name}
      />
      <p className="card-text">{cocktail?.name}</p>
    </div>
  );
}
