import { ReactElement } from "react";
import { useCocktailsContext } from "../hooks";

export function Header(): ReactElement {
  const { nonAlkoholic, updateNonAlkoholic } = useCocktailsContext();
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="non-alkoholic-container">
        <input
          id="nonAlkoholicCheckboxId"
          type="checkbox"
          onChange={(event) => {
            updateNonAlkoholic(event.target.checked);
          }}
          defaultChecked={nonAlkoholic}
          className="non-alkoholic-checkbox"
        />
        <label htmlFor="nonAlkoholicCheckboxId" className="non-alkoholic-label">
          Only non Alkoholic
        </label>
      </div>
    </div>
  );
}
