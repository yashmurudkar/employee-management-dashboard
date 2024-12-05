import React, { useContext, useState } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ setUser, data }) => {
  const { userData } = useContext(AuthContext);
  const employee = userData.filter((emp) => emp.id === data.id);

  const [selectedTask, setSelectedTask] = useState("");

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header setUser={setUser} data={employee[0]} />
      <TaskListNumbers data={employee[0]} setSelectedTask={setSelectedTask} />
      <TaskList data={employee[0]} selectedTask={selectedTask} />
    </div>
  );
};

export default EmployeeDashboard;
