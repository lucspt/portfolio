import "./Nav.css";
import { DynamicNavLink } from "./DynamicNavLink";

export const Nav = () => {

  return (
    <nav className="nav-main">
      <div className="borders" />
      <div className="link-container">
        <DynamicNavLink to="/" text="Home" />
        <DynamicNavLink to="/about" text="About" />
      </div>
    </nav>
  );
};
