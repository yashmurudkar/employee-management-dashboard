import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ task, empId, tid }) => {
  const { acceptNewTask } = useContext(AuthContext);

  return (
    <div className="bg-blue-500 flex-shrink-0 h-full w-[300px] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-blue-700 text-xs px-3 py-1 rounded-md font-bold">
          {task.category}
        </h3>
        <h4 className="font-semibold text-xs">{task.date}</h4>
      </div>
      <div className="h-[60%]">
        <h2 className="mt-5 text-lg">{task.title}</h2>
        <div id="task" className="h-[80%] overflow-y-auto overflow-x-hidden">
          <p  className="text-sm mt-2 ">{task.description}</p>
        </div>
      </div>
      <div className=" mt-3">
        <button
          className="bg-green-500 px-2 py-2 rounded-md text-sm w-full"
          onClick={() => acceptNewTask(empId, tid)}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
