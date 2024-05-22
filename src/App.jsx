import { Outlet, ScrollRestoration } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import "./App.css"
import { ScrollToTop } from "./components/common/ScrollToTop";

export function App() {

  return (
    <div className="root">
      <ScrollToTop />
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
