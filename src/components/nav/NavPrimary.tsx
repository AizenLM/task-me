import React from "react";
import "./nav.css";

export default function NavPrimary() {
  return (
    <nav className="nav-primary">
      <div>
        <h1>Task Me</h1>
      </div>
      <div>
        <ul>
          <li>
            <button>0</button>
          </li>

          <li>
            <a href="">Ingresar</a>
          </li>
          <li>
            <a href="">Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
