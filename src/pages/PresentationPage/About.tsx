import React from "react";

export default function About() {
  return (
    <div className="about">
      <h2>¿Qué puedo hacer?</h2>
      <div className="contens-about">
        <section className="content-img"></section>
        <img
          src="https://cdn-icons-png.flaticon.com/512/428/428001.png"
          alt="laptop"
        />
        <section>
          <div className="text-content">
            <h3>
              La plataforma que te permite crear, organizar y personalizar tus
              tareas de forma fácil, divertida y eficiente.
            </h3>
            <ul>
              <li>
                Crear listas de tareas personalizadas para cada proyecto o área
                de tu vida.
              </li>
              <li>
                Organizar tus tareas por fecha, prioridad, categoría o como tú
                prefieras.
              </li>
              <li>Personalizar tus tareas con colores, emojis, notas y más.</li>
              <li>Establecer recordatorios para no olvidar nada importante.</li>
              <li>
                Compartir tus tareas con amigos, familiares o compañeros de
                trabajo.
              </li>
              <span className="note-text">¡Y mucho más!</span>
            </ul>
            <a className="btn-start">Empezar</a>
          </div>
        </section>
      </div>
    </div>
  );
}
