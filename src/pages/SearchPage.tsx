import { ReactElement } from "react";
import { PaginationMenu, SerachForm } from "../components";

export function SearchPage(): ReactElement {
  return (
    <div className="main-content search-main">
      <SerachForm />
      <PaginationMenu />
    </div>
  );
}
