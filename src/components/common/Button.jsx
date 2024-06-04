
import './Button.css';

export const Button = ({ className="", onClick, children }) => {


  return (
    <button className={`default-btn ${className} `} onClick={onClick}>
      { children }
    </button>
  )
}