import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import "./App.css"

export function App() {

  return (
    <div className="root">
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
