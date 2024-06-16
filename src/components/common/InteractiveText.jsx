import { useEffect, useState } from "react";
import "./InteractiveText.css";

let alreadyTyped = false;
export const InteractiveText = ({ 
  text, 
  order = 1, 
  block=false, 
  onlyAnimateOnce=true, 
  children,
  delay=0,
  ...props

 }) => {
  const [ typed, setTyped ] = useState(alreadyTyped);
  
  const { onAnimationEnd, styles, ..._props } = props;
  
  useEffect(() => {
    if (typed && onAnimationEnd) {
      onAnimationEnd();
    };
  
  }, [typed, onAnimationEnd]);

  return text && (
    <p
      className={`interactive-text${onlyAnimateOnce && typed ? "" : " write-text"}`}
      {..._props} 
      style={{ 
        "--order-index": order - 1,
        "--delay": `${1 + delay}s`,
        ...styles,
      }}
      onAnimationEnd={() => {
        alreadyTyped = true;
        setTyped(true);
      }}
    >
      { text }
    </p>
  )
}