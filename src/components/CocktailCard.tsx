import { ReactElement } from "react";
// import { useCocktailsContext } from "../hooks";
import { ICocktail } from "../interfaces";
import { useCocktailsContext } from "../hooks";
import { useNavigate } from "react-router-dom";

interface ICocktailCardProps {
  cocktail: ICocktail | undefined;
}

export function CocktailCard({ cocktail }: ICocktailCardProps): ReactElement {
  const { updateCocktail } = useCocktailsContext();
  const navigate = useNavigate();

  const handleGoToCocktailClick = () => {
    updateCocktail(cocktail);
    navigate("/details");
  };
  return (
    <div
      className="card"
      title="Click for more details"
      onClick={handleGoToCocktailClick}
    >
      {/* {name} */}
      {/* <p>Concktail id: {cocktail?.id}</p> */}
      <img
        className="image"
        src={cocktail?.imgSrc}
        alt={"Cocktail:" + cocktail?.name}
      />
      <p className="card-text">{cocktail?.name}</p>
      {/* <img src="../assets/poster.png" alt="" /> */}
      {/* <h1>Header {name}</h1>
      <p>Header 2</p> */}
    </div>
  );
}
