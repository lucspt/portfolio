import { useLocation } from "react-router-dom";

export const ArrowButton = ({ arrowImageSrc, text, onClick, className="" }) => {
  const location = useLocation();

  return (
    location.key !== "default" && (
      <button className={`arrow-btn ${className}`} onClick={onClick}>
        <img src={arrowImageSrc} />
        { text && <span>{ text }</span> }
      </button>
    )
  );
};
