import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="bg-red-400 flex-shrink-0 h-full w-[300px] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-700 text-sm px-3 py-1 rounded-md font-bold">
          {task.category}
        </h3>
        <h4 className="font-semibold text-sm">{task.date}</h4>
      </div>
      <div className="h-[60%]">
        <h2 className="mt-5 text-lg">{task.title}</h2>
        <div id="task" className="h-[80%] overflow-y-auto overflow-x-hidden">
          <p  className="text-sm mt-2 ">{task.description}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="w-full bg-red-700 rounded-md py-1">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
