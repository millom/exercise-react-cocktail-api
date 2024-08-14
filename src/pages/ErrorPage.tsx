import { ReactElement } from "react";
import { Footer, Header } from "../components";
import { CocktailProvider } from "../context";

export function ErrorPage(): ReactElement {
  return (
    <>
      <CocktailProvider>
        <Header />
        <div className="main-content center-content">
          <h1>Page not found</h1>
        </div>
      </CocktailProvider>
      <Footer />
    </>
  );
}
