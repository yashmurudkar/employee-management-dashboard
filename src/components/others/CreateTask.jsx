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

  const errorData = {
    title: false,
    date: false,
    assign: false,
    category: false,
    description: false,
  };

  const [newTask, setNewTask] = useState(taskObj);
  const [assignTo, setAssignTo] = useState("");
  const [isError, setIsError] = useState({});
  const { createNewTask } = useContext(AuthContext);

  const validate = () => {
    let errors = { ...errorData };
    if (!newTask.title) errors.title = true;
    if (!newTask.date) errors.date = true;
    if (!newTask.category) errors.category = true;
    if (!newTask.description) errors.description = true;
    if (!assignTo) errors.assign = true;

    setIsError(errors);

    return Object.values(errors).includes(true);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormInvalid = validate();
    if (isFormInvalid) return;
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
          <div className="flex flex-col">
            <h3>Task Title</h3>
            <input
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              placeholder="Make a UI design"
              type="text"
              value={newTask.title}
              name="title"
              onChange={(e) => handleOnChange(e)}
            />
            {isError.title && (
              <span className="text-red-400 mt-1">
                Task title can't be empty
              </span>
            )}
          </div>
          <div className="mt-3 flex flex-col">
            <h3>Task Date</h3>
            <input
              type="date"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              value={newTask.date}
              name="date"
              onChange={(e) => handleOnChange(e)}
            />
            {isError.date && (
              <span className="text-red-400 mt-1">
                Task date can't be empty
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-col">
            <h3>Assign To</h3>
            <input
              type="text"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee Name"
            />
            {isError.assign && (
              <span className="text-red-400 mt-1">
                Task Assign To can't be empty
              </span>
            )}
          </div>
          <div className="mt-3 mb-8 flex flex-col">
            <h3>Task Category</h3>
            <input
              type="text"
              className="bg-transparent outline-none w-[75%] border-2 border-gray-400 rounded-md mt-1 text-sm py-1 px-2"
              placeholder="Design, Dev, etc"
              value={newTask.category}
              name="category"
              onChange={(e) => handleOnChange(e)}
            />
            {isError.category && (
              <span className="text-red-400 mt-1">
                Task category can't be empty
              </span>
            )}
          </div>
        </div>
        <div className="w-2/5">
          <h3>Task Description</h3>
          <textarea
            className="w-full p-2 text-sm h-44 bg-transparent outline-none border-2 border-gray-400 mt-1 rounded-lg"
            name="description"
            value={newTask.description}
            onChange={(e) => handleOnChange(e)}
          ></textarea>
          {isError.description && (
            <span className="text-red-400 mt-1">
              Task description can't be empty
            </span>
          )}
          <button className="w-full rounded text-sm bg-emerald-500 hover:bg-emerald-600 p-3 mt-3">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
