import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home | </Link>
      <Link to="/reviews">All Game Reviews | </Link>
    </nav>
  );
}

export default Nav;
