import React, { useContext, useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data, selectedTask }) => {
  const { userData } = useContext(AuthContext);
  const [empId, setEmpID] = useState(null);

  const getEmpId = () => {
    userData.map((employee) => {
      if (employee.id === data.id) {
        setEmpID(data.id);
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
      {data.tasks.map((ele, idx) => {
        if (ele.newTask && selectedTask === "new") {
          return <NewTask key={idx} data={ele} empId={empId} tid={idx} />;
        }
        if (ele.active && selectedTask === "active") {
          return <AcceptTask key={idx} data={ele} empId={empId} tid={idx} />;
        }
        if (ele.completed && selectedTask === "completed") {
          return <CompleteTask key={idx} data={ele} empId={empId} tid={idx} />;
        }
        if (ele.failed && selectedTask === "failed") {
          return <FailedTask key={idx} data={ele} empId={empId} tid={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
