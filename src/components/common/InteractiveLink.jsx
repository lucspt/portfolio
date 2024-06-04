import { Link } from "react-router-dom";
import "./InteractiveLink.css";

export const InteractiveLink = ({
  className = "",
  to,
  text,
  external,
  children,
  ...props
}) => {

  const className_ = `interactive-link ${className}`;

  return external ? (
    <a className={className_} href={to} {...props}>
      <span>{text}</span>
      {children}
    </a>
  ) : (
    <Link className={className_} to={to} {...props}>
      <span>{text}</span>
      {children}
    </Link>
  );
};
