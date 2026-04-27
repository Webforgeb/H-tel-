import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Hôtel Lumière</h2>

      {/* ☰ icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "active" : ""}>
        <li>Accueil</li>
        <li>Chambres</li>
        <li>Services</li>
        <li>Contact</li>
        <button className="btn">Connexion</button>
      </ul>
    </nav>
  );
}