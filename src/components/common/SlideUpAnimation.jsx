import { useRef, useState } from "react";
import "./SlideUpAnimation.css";
import { useElementInViewport } from "../../hooks/useElementInViewport";

const animDelay = 0.1;

export const SlideUpAnimation = ({
  order = 0,
  offsetY = 50,
  visibilityRef,
  onlyAnimateOnce,
  children,
}) => {
  const [dontAnimate, setDontAnimate] = useState(false);
  const ref = useRef();
  const isVisible = useElementInViewport(visibilityRef || ref, ([e]) => {
    setDontAnimate(prev => (prev) || (onlyAnimateOnce && e.isIntersecting));
    return e.isIntersecting;
  });

  return (
    <div
      className={"slide-up"}
      ref={ref}
      style={{
        transitionDelay: `${order * animDelay}s`,
        transform: `translateY(${isVisible || dontAnimate ? 0 : offsetY}px)`,
        opacity: Number(dontAnimate ? 1 : isVisible),
      }}
    >
      {children}
    </div>
  );
};
