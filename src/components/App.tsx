import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";
import { CocktailProvider } from "../context/CocktailProvider";
// import "./App.css";

export function App() {
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
