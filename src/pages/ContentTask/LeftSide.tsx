import React, { useState } from "react";
import FormGroupTask from "../../components/Tasks/formGroupTask";
import TaskGroupInterface from "../../types/GroupTask";
import GroupTask from "../../components/Tasks/GroupTask";

export default function LeftSide() {
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (task: TaskGroupInterface | null) => {
    if (task === null) {
      setShowForm(false);
    } else {
      console.log("Nueva tarea:", task);
      setShowForm(false);
    }
  };
  return (
    <div className="leftSide">
      <div className="leftSide-Top">
        <h1>Task Me</h1>
      </div>
      <div className="leftSide-Top-User">
        <div className="image-Top-User">
          <img
            src="https://scontent.fmex22-1.fna.fbcdn.net/v/t39.30808-6/376663552_769119728320528_2646585827973835024_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEcWpeQEAVsDTnrnNY81APDcN5sFbzgOQhw3mwVvOA5CBVlxcQmQxozlNZdpF_SZ6rpi7PxzL2oORq6g8Rv-XWu&_nc_ohc=PN2C1m_e8i0Q7kNvgGuQr5J&_nc_ht=scontent.fmex22-1.fna&oh=00_AYAGAek8ycQddrdyjr3YVhVQFZXQ1yGR_LTEEujw98O2VQ&oe=66502C40"
            alt="userImage"
          />
        </div>
        <span className="nameUser">AizenLM</span>
      </div>
      <div className="leftSide-content">
        <div className="leftSide-controlls">
          <h3>Grupo de Tareas</h3>
          <button onClick={() => setShowForm(true)}>+</button>
          {showForm && (
            <FormGroupTask onAddTask={handleAddTask} setShow={showForm} />
          )}
        </div>
        <div className="leftSide-group-tasks">
          <GroupTask
            name="Vacaciones"
            description="Tareas para vacaciones"
            date="19-05-2024"
          />
          <GroupTask
            name="Universidad"
            description="Tareas para universidad"
            date="19-05-2024"
          />
          <GroupTask
            name="Tiempos libres"
            description="Mis tareas para mis tiempos libres"
            date="19-05-2024"
          />
        </div>
      </div>
    </div>
  );
}
