import React from "react";
//LOGOS SVG

import FacebookSVG from "../assets/svg/FacebookSvg";
import InstagramSvg from "../assets/svg/InstagramSvg";
import XSvg from "../assets/svg/XSvg";
import YoutubeSvg from "../assets/svg/YoutubeSvg";
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
                  <FacebookSVG fill="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramSvg fill="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <XSvg fill="white" />
                </a>
              </li>
              <li>
                <a href="">
                  <YoutubeSvg fill="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
