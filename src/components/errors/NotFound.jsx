import { Link, useRouteError } from "react-router-dom"
import { Button } from "../common/Button";
import "./NotFound.css";


export const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="not-found">
        <p className="error-message">{ error.statusText || error.message }</p>
        <Link to="/" replace={true} className="default-btn">
          Back Home
        </Link>
      </div>
    </div>
  )
}