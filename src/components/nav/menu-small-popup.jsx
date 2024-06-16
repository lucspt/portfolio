import { NavLink } from "react-router-dom";
import { DynamicNavLink } from "./DynamicNavLink";
import { SlideUpAnimation } from "../common/SlideUpAnimation";

export function MenuSmallPopup({ closeModal }) {
  return (
    <>
      <div className="menu-small-backdrop fade-in" onClick={closeModal}/>
      <div className="menu-small-overlay" onClick={closeModal}>
        <SlideUpAnimation>
          <div className="menu-small-wrapper">
            <DynamicNavLink to="/" text="Home" className="menu-small-link" />
            <DynamicNavLink
              to="/about"
              text="About"
              className="menu-small-link"
            />
          </div>
        </SlideUpAnimation>
      </div>
    </>
  );
}
