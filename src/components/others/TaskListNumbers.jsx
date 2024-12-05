import React from "react";

const TaskListNumbers = ({ data, setSelectedTask }) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10 ">
      <div className="bg-blue-400 w-[40%] py-4 px-5 rounded-lg cursor-pointer" onClick={()=>setSelectedTask("new")}>
        <h1 className="font-bold text-3xl">{data.taskCount.newTask}</h1>
        <h1 className="font-semi-bold text-xl">New Tasks</h1>
      </div>
      <div className="bg-yellow-400 w-[40%] py-4 px-5 rounded-lg cursor-pointer" onClick={()=>setSelectedTask("active")}>
        <h1 className="font-bold text-3xl">{data.taskCount.active}</h1>
        <h1 className="font-semi-bold text-xl">Active Tasks</h1>
      </div>
      <div className="bg-red-400 w-[40%] py-4 px-5 rounded-lg cursor-pointer" onClick={()=>setSelectedTask("failed")}>
        <h1 className="font-bold text-3xl">{data.taskCount.failed}</h1>
        <h1 className="font-semi-bold text-xl">Failed Tasks</h1>
      </div>
      <div className="bg-green-400 w-[40%] py-4 px-5 rounded-lg cursor-pointer" onClick={()=>setSelectedTask("completed")}> 
        <h1 className="font-bold text-3xl">{data.taskCount.completed}</h1>
        <h1 className="font-semi-bold text-xl">Completed Tasks</h1>
      </div>
    </div>
  );
};

export default TaskListNumbers;
