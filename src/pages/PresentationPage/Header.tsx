import React from "react";
import "./presentation.css";

export default function Header() {
  return (
    <div className="content-header">
      <section className="content-left">
        <h1>
          Task <span className="met">Met</span>
        </h1>
        <div>
          <h2>Gestion de Tareas Online</h2>
          <p>
            ¡Descubre una nueva forma de gestionar tus tareas diarias con Task
            Met! Nuestra plataforma te ofrece la herramienta perfecta para
            organizar y personalizar tus actividades de manera eficiente y sin
            complicaciones.
          </p>
          <a className="btn-start">Empezar</a>
        </div>
      </section>
      <section>
        <div className="content-person">
          <img
            src="https://img.freepik.com/foto-gratis/hombre-pensativo-frente-computadora_329181-14535.jpg"
            alt="person view a pc"
          />
        </div>
      </section>
    </div>
  );
}
