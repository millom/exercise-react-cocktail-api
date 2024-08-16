import { ReactElement } from "react";
import { SearchResult, SerachForm } from "../components";

export function SearchPage(): ReactElement {
  return (
    <div className="main-content search-main">
      <SerachForm />
      <SearchResult />
    </div>
  );
}
