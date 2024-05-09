import App from "./App";
import { Home } from "./components/home/Home";
import { homeProjectsListLoader } from "./components/home/loader";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />, loader: homeProjectsListLoader },
      {
        path: "/about",
        element: <></>
      }
    ]
  }
]