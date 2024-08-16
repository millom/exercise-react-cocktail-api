import { ReactElement } from "react";
import { ICocktail } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface ISearchResultListProps {
  currentItems: ICocktail[] | undefined;
}

export function SearchResultList({
  currentItems,
}: ISearchResultListProps): ReactElement {
  const navigate = useNavigate();

  return (
    <>
      <ul className="ul">
        {currentItems?.map((cocktail) => (
          <li
            key={cocktail.id}
            className="list-item"
            onClick={() => {
              navigate(`/details/${cocktail!.id}`);
            }}
          >
            {cocktail.name}
          </li>
        ))}
      </ul>
    </>
  );
}
