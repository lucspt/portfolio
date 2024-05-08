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
  const animationDuration = 2;
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
        animationDuration: `${animationDuration}s`,
        animationDelay: `${delay + (animationDuration * order - 1)}s`,
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