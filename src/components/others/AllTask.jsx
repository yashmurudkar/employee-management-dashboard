import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  
  return (
    <div id="tasklist" className="mt-5 bg-[#1C1C1C] rounded p-5">
      <div className="p-3 flex bg-red-400 rounded-md justify-between">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h2 className="text-lg font-medium w-1/5 ">New Task</h2>
        <h2 className="text-lg font-medium w-1/5 ">Active Task</h2>
        <h2 className="text-lg font-medium w-1/5">Completed</h2>
        <h2 className="text-lg font-medium w-1/5">Failed</h2>
      </div>
      <div className="">
        {userData.map((employee) => (
          <div
            className="flex justify-between border-2 border-emerald-500 py-2 px-3 rounded-md mt-3"
            key={employee.id}
          >
            <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
            <h2 className="text-lg font-medium w-1/5 text-blue-500">
              {employee.taskCount.newTask}
            </h2>
            <h2 className="text-lg font-medium w-1/5 text-yellow-500">
              {employee.taskCount.active}
            </h2>
            <h2 className="text-lg font-medium w-1/5 text-green-500">
              {employee.taskCount.completed}
            </h2>
            <h2 className="text-lg font-medium w-1/5 text-red-500">
              {employee.taskCount.failed}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
