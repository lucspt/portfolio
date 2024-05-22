import { useEffect } from "react"


export const useScrollToTop = (containerRef, options={}) => {
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
        ...options,
      })
    }
  }, [containerRef])
} 