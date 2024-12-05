import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="bg-green-400 flex-shrink-0 h-full w-[300px] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-green-700 text-sm px-3 py-1 rounded-md font-bold">
          {data.category}
        </h3>
        <h4 className="font-semibold text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 h-[20%]">{data.description}</p>
      <div className="mt-3">
        <button className="w-full bg-green-700 rounded-md py-1">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
