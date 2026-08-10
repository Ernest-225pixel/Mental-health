import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MindSpace
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/feed">Community</Link>
        <Link to="/create">Share a Problem</Link>
        <Link to="/guidelines">Guidelines</Link>
      </div>
    </nav>
  );
}

export default Navbar;
