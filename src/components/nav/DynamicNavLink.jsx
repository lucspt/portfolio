import { NavLink, useLocation } from "react-router-dom";

export const DynamicNavLink = ({ text, to, ...props }) => {
  const { pathname } = useLocation();

  return (
    <div className="nav-link-wrapper">
      {pathname === to ? (
        <span className="nav-link">{text}</span>
      ) : (
        <NavLink to={to} className="nav-link">
          {text}
        </NavLink>
      )}
    </div>
  );
};
