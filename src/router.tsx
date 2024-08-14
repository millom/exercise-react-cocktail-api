import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import { App } from "./components";
import { CocktailPage, LandingPage, SearchPage } from "./pages";
import { RootLayout } from "./components";
// import RootLayout from "./components/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/details" element={<CocktailPage />} />
    </Route>
  )
);
