import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Footer(): ReactElement {
  return (
    <div className="footer">
      <nav className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/search" className="link">
          Search
        </Link>
      </nav>
    </div>
  );
}
