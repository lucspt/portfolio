import App from "./App";
import { Home } from "./components/home/Home";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <></>
      }
    ]
  }
]