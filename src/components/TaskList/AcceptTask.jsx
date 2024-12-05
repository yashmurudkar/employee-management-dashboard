import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, tid, empId }) => {
  const { completeTask, failedTask } = useContext(AuthContext);

  return (
    <div className="bg-yellow-400 flex-shrink-0 h-full w-[300px] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-yellow-700 text-sm px-3 py-1 rounded-md font-bold">
          {data.category}
        </h3>
        <h4 className="font-semibold text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 h-[20%]">{data.description}</p>
      <div className="flex justify-between mt-3">
        <button
          className="bg-green-600 px-2 py-2 rounded-md text-sm"
          onClick={() => completeTask(empId, tid)}
        >
          Mark as Complete
        </button>
        <button
          className="bg-red-600 px-2 py-2 rounded-md text-sm"
          onClick={() => failedTask(empId, tid)}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
