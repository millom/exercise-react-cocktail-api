import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  CocktailDetailsPage,
  ErrorPage,
  FavoritesPage,
  LandingPage,
  SearchPage,
} from "./pages";
import { RootLayout } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/details/:cocktailId" element={<CocktailDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
);
