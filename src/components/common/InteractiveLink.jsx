
import { Link } from 'react-router-dom';
import './InteractiveLink.css';

export const InteractiveLink = ({ className="", to, children, ...props }) => {


  return (
    <Link className={`interactive-link ${className} `} to={to} {...props}>
      { children }
    </Link>
  )
}