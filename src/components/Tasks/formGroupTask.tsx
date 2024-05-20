import React from "react";
import { useState } from "react";
import "../../styles/modalGroup.css";
interface Task {
  name: string;
  description: string;
  date: string;
}

interface TaskFormProps {
  onAddTask: (task: Task | null) => void;
  setShow: boolean;
}

const FormGroupTask: React.FC<TaskFormProps> = ({ onAddTask, setShow }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask({ name: taskName, description: taskDescription, date: taskDate });
    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
  };

  return (
    <div className={`modal ${setShow ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={() => onAddTask(null)}>
          &times;
        </span>
        <h2>Nuevo grupo</h2>
        <form onSubmit={handleSubmit}>
          <div className="group-from">
            <label htmlFor="taskName">Nombre:</label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />

            <label htmlFor="taskDescription">Descripción:</label>
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            ></textarea>

            <label htmlFor="taskDate">Fecha de Creación:</label>
            <input
              type="date"
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default FormGroupTask;
