import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, empId, tid }) => {
  const { acceptNewTask } = useContext(AuthContext);

  return (
    <div className="bg-blue-500 flex-shrink-0 h-full w-[300px] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-blue-700 text-sm px-3 py-1 rounded-md font-bold">
          {data.category}
        </h3>
        <h4 className="font-semibold text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 h-[20%]">{data.description}</p>
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
