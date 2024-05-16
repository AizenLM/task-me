import React from "react";

export default function ContentBody() {
  return (
    <body className="body-content-task">
      <div className="task-top">
        <h1>Nombre del Grupo </h1>
        <div className="content-task-form">
          <div className="img-task-group">
            <img src="" alt="Aqui va la imagen" />
          </div>
          <div className="task-from">
            <form action="">
              <div>
                <h2>Personalizar Tarea</h2>
              </div>
              <div className="task-input-name">
                <label htmlFor="">Ingresa el nombre:</label>
                <input
                  type="text"
                  placeholder="Ingresa el nombre de la tarea"
                />
                <area shape="" coords="" href="" alt="Descripcion......." />
                <label htmlFor="data">Fecha de terminacion: </label>
                <input type="date" name="" id="" />
                <label htmlFor="">Agregar imagen:</label>
                <input type="file" name="" id="" />
              </div>
            </form>
          </div>
          <div className="task-controls">
            <button className="button-control" id="task-button-delete">
              Eliminar
            </button>
            <button className="button-control" id="task-button-save">
              Guardar
            </button>
            <button className="button-control" id="task-button-finish">
              Terminar
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
