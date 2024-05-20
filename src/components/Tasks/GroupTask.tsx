import React from "react";
import TaskGroupInterface from "../../types/GroupTask";

// Utiliza la sintaxis de función para definir tu componente
const GroupTask = ({ name, description, date }: TaskGroupInterface) => {
  return (
    <button className="group-task">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="date-task">{date}</span>
    </button>
  );
};

export default GroupTask;
