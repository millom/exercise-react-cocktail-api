import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import { App } from "./components";
import {
  CocktailDetailsPage,
  ErrorPage,
  LandingPage,
  SearchPage,
} from "./pages";
import { RootLayout } from "./pages";
// import RootLayout from "./components/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/details" element={<CocktailDetailsPage />} />
    </Route>
  )
);
