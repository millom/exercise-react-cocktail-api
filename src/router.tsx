import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components";
import { CocktailPage, LandingPage, SearchPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/details" element={<CocktailPage />} />
    </Route>
  )
);
