import React from "react";
//LOGOS SVG
import facebookSvg from "../assets/svg/facebook.svg";
import instagramSvg from "../assets/svg/instagram.svg";
import xSvg from "../assets/svg/x.svg";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div>
            <h1>Task Me</h1>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Terminos</a>
              </li>
              <li>
                <a href="">Soporte</a>
              </li>
              <li>
                <a href="">Acerca de</a>
              </li>
              <li>
                <a href="">Privacidad</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Copyright © 2024 Task Me</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="">
                  <img src={facebookSvg} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={xSvg} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagramSvg} alt="X" />X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
