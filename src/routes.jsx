import App from "./App";
import { About } from "./components/about/About";
import { Home } from "./components/home/Home";
import { Project } from "./components/project/Project";
import { projectLoader } from "./components/project/loader";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "project/:projectId",
        loader: projectLoader,
        element: <Project />

      }
    ]
  }
]