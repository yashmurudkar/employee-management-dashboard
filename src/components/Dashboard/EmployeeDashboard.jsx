import React, { useContext, useState } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ setUser, loggedInUserData }) => {
  const { userData } = useContext(AuthContext);
  const employee = userData.filter((emp) => emp.id === loggedInUserData.id);

  const [selectedTask, setSelectedTask] = useState("active");

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header setUser={setUser} user={employee[0]} />
      <TaskListNumbers loggedInUserData={employee[0]} setSelectedTask={setSelectedTask} selectedTask={selectedTask}/>
      <TaskList loggedInUserData={employee[0]} selectedTask={selectedTask} />
    </div>
  );
};

export default EmployeeDashboard;
