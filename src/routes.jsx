import { App } from "./App";
import { About } from "./components/about/About";
import { NotFound } from "./components/errors/NotFound";
import { Home } from "./components/home/Home";
import { Project } from "./components/project/Project";
import { projectLoader } from "./components/project/loader";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "projects/:projectId",
        loader: projectLoader,
        element: <Project />

      }
    ]
  }
]