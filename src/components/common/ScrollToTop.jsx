import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"


export const ScrollToTop = ({ locationKey = "pathname" }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, [location[locationKey]])

  return <></>;
}