import { Outlet, ScrollRestoration } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import "./App.css";

export function App() {

  return (
    <div className="root">
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};
