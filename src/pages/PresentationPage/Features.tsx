import React from "react";
export default function Features() {
  return (
    <div className="additional-content">
      <div className="content-register">
        <section className="content-img">
          <img src="form-register.png" alt="register" />
        </section>
        <section className="text-content">
          <h3>
            ¡Regístrate en segundos y en cualquier lugar del mundo! Con solo
            unos clics, puedes crear tu cuenta en Task Met y comenzar a
            organizar tus tareas de forma rápida y sencilla.
          </h3>
          <ul>
            <li>Subcripcion gratis.</li>
            <li>Acceso limitado.</li>
          </ul>
          <div>
            <a className="btn-login">Crear cuenta</a>
          </div>
        </section>
      </div>
      <div className=""></div>
    </div>
  );
}
