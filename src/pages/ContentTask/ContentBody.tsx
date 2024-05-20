import React from "react";
import TaskContent from "../../components/Tasks/TaskContent";

export default function ContentBody() {
  return (
    <body className="body-content-task">
      <div className="task-top">
        <h1>Nombre del Grupo </h1>
        <div className="content-task-form">
          <div className="img-task-group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa11FAoe9f2CyTIRsG_12k4lDZKQmDtMf8jvyds147lw&s"
              alt="Aqui va la imagen"
            />
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
                <textarea name="description" id="">
                  Descripcion
                </textarea>
                <label htmlFor="data">Fecha de terminacion: </label>
                <input type="date" name="" id="" />
                <label htmlFor="">Agregar imagen:</label>
                <input type="file" name="" id="" />
              </div>
              <div className="select-piority">
                <div>
                  <label htmlFor="priority">Prioridad:</label>
                  <select id="priority" name="priority" required>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                  </select>
                </div>
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
      <div className="body-tasks-grid">
        <TaskContent
          name="Tocar Bateria"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5OE0GT5Spbv265e5phwYAQuqby5bYFes897w4yWLlA&s"
          description="Tocar bateria"
          priority="Media"
        ></TaskContent>

        <TaskContent
          name="Programar"
          image="https://media.licdn.com/dms/image/D4E12AQHlgB-MNwJuvw/article-cover_image-shrink_720_1280/0/1694282866727?e=2147483647&v=beta&t=lDc8TiSgqc3TvGvgeMMUgGK2tQYHYtkmAiDDd8EIw8U"
          description="Programar pagina task met"
          priority="Alta"
        ></TaskContent>
        <TaskContent
          name="Ejercicio"
          image="https://drfisio.es/wp-content/uploads/2024/03/15-beneficios-de-hacer-ejercicio.jpg"
          description="Hacer ejercicio"
          priority="Alta"
        ></TaskContent>
      </div>
    </body>
  );
}
