import backArrow from "../../vectors/arrow-back.svg";
import forwardArrow from "../../vectors/arrow-forward.svg";
import "./ArrowButton.css";

export const ArrowButton = ({
  hoverText,
  text,
  onClick,
  className = "",
  back,
  style,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`arrow-btn ${className}${back ? " _back" : ""}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        "--translate-direction": disabled ? 0 : back ? -1 : 1,
        ...style,
      }}
      {...props}
    >
      {text && <span>{text}</span>}
      {hoverText && <span className="hover-text">{hoverText}</span>}
      <img src={back ? backArrow : forwardArrow} />
    </button>
  );
};
