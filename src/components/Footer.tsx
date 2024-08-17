import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export function Footer(): ReactElement {
  return (
    <div className="footer">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          Search
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "link link-active" : "link")}
        >
          Favorites
        </NavLink>
      </nav>
    </div>
  );
}
