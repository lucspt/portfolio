import { useEffect, useState } from "react"


export const useElementInViewport = (ref, callback=([e]) => e.isIntersecting, options) => {

  const [ isVisible, setIsVisible ] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (...args) => {setIsVisible(Boolean(callback(...args)))},
      options,
    );
    if (ref.current) {
      observer.observe(ref.current);
    };
    return () => observer.disconnect();
  }, [ref])

  return isVisible;
}