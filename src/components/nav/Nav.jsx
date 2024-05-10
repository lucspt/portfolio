import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {

  return (
    <nav className="nav-main">
      <div className="borders" />
      <div className="link-container">
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}