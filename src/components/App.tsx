// import { Outlet } from "react-router-dom";
// import { Footer, Header } from ".";
// import { CocktailProvider } from "../context/CocktailProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
// import { RootLayout } from ".";
// import "./App.css";

export function App() {
  return (
    <RouterProvider router={router} />
    // <>
    //   <RootLayout />
    // </>
    // <>
    //   <CocktailProvider>
    //     <Header />
    //     <Outlet />
    //   </CocktailProvider>
    //   <Footer />
    // </>
  );
}
