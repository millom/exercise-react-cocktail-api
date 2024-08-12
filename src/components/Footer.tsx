import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Footer(): ReactElement {
  return (
    <>
      <h1>Footer</h1>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/search" className="link">
          Search
        </Link>
      </nav>
    </>
  );
}
