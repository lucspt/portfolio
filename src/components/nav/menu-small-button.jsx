import { Link, NavLink } from "react-router-dom";
import smallMenuButton from "../../vectors/menu.svg";
import { useState } from "react";

export function MenuSmallButton({ openMenu }) {
  
  return (
    <button className="menu-small" onClick={openMenu}>
      <img src={smallMenuButton} />
    </button>
  )
}