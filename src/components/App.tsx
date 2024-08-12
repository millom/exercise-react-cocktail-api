import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";
// import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
