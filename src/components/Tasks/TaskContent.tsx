import React from "react";

interface TaskContentProps {
  name: string;
  image: string;
  description: string;
  priority: string;
}
const getPriorityColor = (priority: string): string => {
  switch (priority.toLowerCase()) {
    case "alta":
      return "red";
    case "media":
      return "orange";
    case "baja":
      return "green";
    default:
      return "gray";
  }
};

const TaskContent: React.FC<TaskContentProps> = ({
  name,
  image,
  description,
  priority,
}) => {
  const priorityColor: string = getPriorityColor(priority);
  return (
    <button className="btn-task-content">
      <div>
        <h3>{name}</h3>
      </div>
      <div className="image-container">
        <img src={image} alt={`Imagen de ${name}`} />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <span className="priority" style={{ background: priorityColor }}>
          {priority}
        </span>
      </div>
    </button>
  );
};

export default TaskContent;
