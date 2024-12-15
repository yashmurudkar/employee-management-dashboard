import React from "react";

const TaskListNumbers = ({
  loggedInUserData,
  setSelectedTask,
  selectedTask,
}) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10 ">
      <div
        className={`${
          selectedTask === "new"
            ? "bg-blue-500 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
            : "bg-blue-300 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
        }`}
        onClick={() => setSelectedTask("new")}
      >
        <h1
          className={`font-bold text-3xl ${
            selectedTask === "new" ? "" : "text-gray-400"
          }`}
        >
          {loggedInUserData.taskCount.newTask}
        </h1>
        <h1
          className={`font-semi-bold text-xl ${
            selectedTask === "new" ? "" : "text-gray-400"
          }`}
        >
          New Tasks
        </h1>
      </div>
      <div
        className={`${
          selectedTask === "active"
            ? "bg-yellow-400 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
            : "bg-yellow-200 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
        }`}
        onClick={() => setSelectedTask("active")}
      >
        <h1
          className={`font-bold text-3xl ${
            selectedTask === "active" ? "" : "text-gray-400"
          }`}
        >
          {loggedInUserData.taskCount.active}
        </h1>
        <h1
          className={`font-semi-bold text-xl ${
            selectedTask === "active" ? "" : "text-gray-400"
          }`}
        >
          Active Tasks
        </h1>
      </div>
      <div
        className={`${
          selectedTask === "failed"
            ? "bg-red-500 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
            : "bg-red-300 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
        }`}
        onClick={() => setSelectedTask("failed")}
      >
        <h1
          className={`font-bold text-3xl ${
            selectedTask === "failed" ? "" : "text-gray-400"
          }`}
        >
          {loggedInUserData.taskCount.failed}
        </h1>
        <h1
          className={`font-semi-bold text-xl ${
            selectedTask === "failed" ? "" : "text-gray-400"
          }`}
        >
          Failed Tasks
        </h1>
      </div>
      <div
        className={`${
          selectedTask === "completed"
            ? "bg-green-500 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
            : "bg-green-300 w-[40%] py-4 px-5 rounded-lg cursor-pointer"
        }`}
        onClick={() => setSelectedTask("completed")}
      >
        <h1
          className={`font-bold text-3xl ${
            selectedTask === "completed" ? "" : "text-gray-400"
          }`}
        >
          {loggedInUserData.taskCount.completed}
        </h1>
        <h1
          className={`font-semi-bold text-xl ${
            selectedTask === "completed" ? "" : "text-gray-400"
          }`}
        >
          Completed Tasks
        </h1>
      </div>
    </div>
  );
};

export default TaskListNumbers;
