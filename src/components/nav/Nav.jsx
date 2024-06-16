import "./Nav.css";
import { DynamicNavLink } from "./DynamicNavLink";
import { useState } from "react";
import { MenuSmallButton } from "./menu-small-button";
import { MenuSmallPopup } from "./menu-small-popup";

export const Nav = () => {
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);

  return (
    <nav className="nav-main">
      <div className="borders" />
      <div className="link-container md-trigger">
        <DynamicNavLink to="/" text="Home" />
        <DynamicNavLink to="/about" text="About" />
      </div>
      <div className="small-nav-flex">
        <MenuSmallButton openMenu={() => setSmallMenuOpen(true)} />
        {smallMenuOpen ? <MenuSmallPopup closeModal={() => setSmallMenuOpen(false)}/> : null}
      </div>
    </nav>
  );
};
