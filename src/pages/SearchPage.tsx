import { ReactElement } from "react";
import { SearchResult, SearchForm } from "../components";

export function SearchPage(): ReactElement {
  return (
    <div className="main-content search-main">
      <SearchForm />
      <SearchResult />
    </div>
  );
}
