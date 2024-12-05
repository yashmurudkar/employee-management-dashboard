import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const taskObj = {
    title: "",
    description: "",
    date: "",
    category: "",
    active: false,
    completed: false,
    failed: false,
    newTask: true,
  };
  const [newTask, setNewTask] = useState(taskObj);
  const [assignTo, setAssignTo] = useState("");
  const { createNewTask } = useContext(AuthContext);

  const handleOnChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(assignTo, newTask);
    setNewTask(taskObj);
    setAssignTo("");
  };

  return (
    <div className=" rounded-lg mt-10 bg-[#1C1C1C] p-5">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-wrap items-start justify-between"
      >
        <div className="w-1/2 ">
          <div>
            <h3>Task Title</h3>
            <input
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              placeholder="Make a UI design"
              type="text"
              value={newTask.title}
              name="title"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="mt-3 ">
            <h3>Date</h3>
            <input
              type="date"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              value={newTask.date}
              name="date"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="mt-3 ">
            <h3>Assign To</h3>
            <input
              type="text"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee Name"
            />
          </div>
          <div className="mt-3 mb-8">
            <h3>Category</h3>
            <input
              type="text"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              placeholder="Design, Dev, etc"
              value={newTask.category}
              name="category"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
        <div className="w-2/5">
          <h3>Description</h3>
          <textarea
            className="w-full p-2 text-sm h-44 bg-transparent outline-none border-2 border-gray-400 mt-1 rounded-lg"
            name="description"
            value={newTask.description}
            onChange={(e) => handleOnChange(e)}
          ></textarea>
          <button className="w-full rounded text-sm bg-emerald-500 hover:bg-emerald-600 p-3">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
