import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { CocktailProvider } from "../context";
import { Header, Footer } from ".";

export function RootLayout(): ReactElement {
  return (
    <>
      <CocktailProvider>
        <Header />
        <Outlet />
      </CocktailProvider>
      <Footer />
    </>
  );
}

// export default RootLayout;
