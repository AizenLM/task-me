import React from "react";

export default function Register() {
  return (
    <div>
      <form action="" className="form-register">
        <div className="content-title right-midle">
          <h1>Crea tu cuenta</h1>
          <hr />
        </div>
        <div className="register-inputs">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" placeholder="Tu apellido" />
          <label htmlFor="email">Correo electronico:</label>
          <input type="email" name="" id="" placeholder="Correo electronico" />
          <label htmlFor="telefono">Telefono:</label>
          <input type="tel" placeholder="Tu telefono" />
          <label htmlFor="password">Crea una contraseña</label>
          <input type="password" />
          <label htmlFor="rep-password">Confirma tu contraseña</label>
          <input type="password" />
          <p>Acepto terminos y condiciones.</p>
        </div>
        <div className="ul-hor">
          <ul>
            <li>Facebook</li>
            <li>Google</li>
            <li>X</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="control-form">
          <button className="btn-login">Crear cuenta</button>
        </div>
      </form>
    </div>
  );
}
