import React from "react";
import GoogleSvg from "../../assets/svg/GoogleSvg";
import MicrosoftSvg from "../../assets/svg/MiscrosoftSvg";
import DiscordSvg from "../../assets/svg/DiscordSvg";

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
          <div className="check-terms">
            <label htmlFor="checkbox-term">
              <input type="checkbox" name="checkbox-term" id="term-box" />
              Acepto los terminos de privacidad
            </label>
          </div>
          <div className="social-buttons">
            <div className="container-title">
              <h3>Ingresar con</h3>
            </div>
            <div className="container">
              <button className="social-button">
                <GoogleSvg />
                Continuar con Google
              </button>
            </div>
            <div className="container">
              <button className="social-button">
                <MicrosoftSvg />
                Continuar con Microsft
              </button>
            </div>
            <div className="container">
              <button className="social-button">
                <DiscordSvg />
                Continuar con Discord
              </button>
            </div>
          </div>
        </div>
        <div className="control-form">
          <button className="btn-login">Crear cuenta</button>
        </div>
      </form>
    </div>
  );
}
