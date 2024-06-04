import { useRouteError } from "react-router-dom"
import "./NotFound.css";
import { InteractiveLink } from "../common/InteractiveLink";


export const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="not-found">
        <p className="error-message">{ error.statusText || error.message }</p>
        <InteractiveLink to="/" replace={true} text="Back Home" />
      </div>
    </div>
  )
}