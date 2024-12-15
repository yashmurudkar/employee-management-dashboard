import React, { useContext, useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ loggedInUserData, selectedTask }) => {
  const { userData } = useContext(AuthContext);
  const [empId, setEmpID] = useState(null);

  const getEmpId = () => {
    userData.map((employee) => {
      if (employee.id === loggedInUserData.id) {
        setEmpID(loggedInUserData.id);
      }
    });
  };

  useEffect(() => {
    getEmpId();
  }, []);

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 mt-10 py-3 "
    >
      {loggedInUserData.tasks.map((task, idx) => {
        if (task.newTask && selectedTask === "new") {
          return <NewTask key={idx} task={task} empId={empId} tid={idx}/>;
        }
        if (task.active && selectedTask === "active") {
          return <AcceptTask key={idx} task={task} empId={empId} tid={idx} />;
        }
        if (task.completed && selectedTask === "completed") {
          return <CompleteTask key={idx} task={task} empId={empId} tid={idx} />;
        }
        if (task.failed && selectedTask === "failed") {
          return <FailedTask key={idx} task={task} empId={empId} tid={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
