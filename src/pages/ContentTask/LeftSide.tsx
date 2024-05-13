import React from "react";

export default function LeftSide() {
  return (
    <div className="leftSide">
      <div className="leftSide-Top">
        <h1>Task Me</h1>
      </div>
      <div className="leftSide-Top-User">
        <img src="" alt="userImage" />
        <span className="nameUser">AizenLM</span>
      </div>
      <div className="leftSide-content">
        <div className="leftSide-controlls">
          <h3>Grupo de Tareas</h3>
          <button>+</button>
        </div>
        <div className="leftSide-group-tasks">
          <div className="group-task">
            <h3>Tarea 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="date-task"></span>
          </div>
          <div className="group-task">
            <h3>Tarea 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="date-task"></span>
          </div>
          <div className="group-task">
            <h3>Tarea 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="date-task"></span>
          </div>
          <div className="group-task">
            <h3>Tarea 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="date-task"></span>
          </div>
          <div className="group-task">
            <h3>Tarea 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="date-task"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
