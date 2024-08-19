import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function Header(): ReactElement {
  const { updateNonAlcoholic: updateNonAlcoholic } = useCocktailsContext();
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="hidden non-alcoholic-container">
        <input
          id="nonAlcoholicCheckboxId"
          type="checkbox"
          onChange={(event) => {
            updateNonAlcoholic(event.target.checked);
          }}
          defaultChecked={false}
          className="non-alcoholic-checkbox"
        />
        <label htmlFor="nonAlcoholicCheckboxId" className="non-alkoholic-label">
          Only non Alcoholic
        </label>
      </div>
    </div>
  );
}
