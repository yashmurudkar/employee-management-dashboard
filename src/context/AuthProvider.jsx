import React, { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
const defaultEmployees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@e.com",
    password: "123",
    taskCount: {
      newTask: 0,
      active: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Fix bugs in project",
        description: "Resolve bugs identified in the latest build.",
        date: "2024-10-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write documentation",
        description: "Document the new features for the upcoming release.",
        date: "2024-10-02",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Attend team meeting",
        description: "Participate in the weekly team sync.",
        date: "2024-10-03",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "ishaan@e.com",
    password: "123",
    taskCount: {
      newTask: 0,
      active: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Update project plan",
        description: "Revise the project timeline based on recent feedback.",
        date: "2024-10-04",
        category: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design new feature",
        description: "Create wireframes for the new user feature.",
        date: "2024-10-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Conduct user testing",
        description: "Test the new feature with a focus group.",
        date: "2024-10-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "priya@e.com",
    password: "123",
    taskCount: {
      newTask: 0,
      active: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Research competitor products",
        description: "Analyze the latest features from competitor offerings.",
        date: "2024-10-07",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description:
          "Create a presentation for the upcoming stakeholder meeting.",
        date: "2024-10-08",
        category: "Presentations",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Review team feedback",
        description: "Go through feedback from team members and summarize.",
        date: "2024-10-09",
        category: "Feedback",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "ananya@e.com",
    password: "123",
    taskCount: {
      newTask: 0,
      active: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Create user stories",
        description: "Draft user stories for the next sprint planning.",
        date: "2024-10-10",
        category: "Agile",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Set up development environment",
        description:
          "Ensure the development environment is ready for the team.",
        date: "2024-10-11",
        category: "Setup",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Analyze performance metrics",
        description:
          "Review application performance metrics and report findings.",
        date: "2024-10-12",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Saanvi",
    email: "saanvi@e.com",
    password: "123",
    taskCount: {
      newTask: 0,
      active: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Plan marketing strategy",
        description: "Develop a marketing strategy for the new product launch.",
        date: "2024-10-13",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Social media outreach",
        description: "Engage with users on social media platforms.",
        date: "2024-10-14",
        category: "Outreach",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Compile monthly report",
        description: "Gather data for the monthly performance report.",
        date: "2024-10-15",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(() => {
    const storedEmployees = localStorage.getItem("employees");
    return storedEmployees ? JSON.parse(storedEmployees) : defaultEmployees;
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(userData));
  }, [userData]);

  const createNewTask = (assignTo, newTask) => {
    setUserData((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((emp) => {
        if (emp.firstName === assignTo) {
          const updatedTasks = [...emp.tasks, newTask];
          const updatedTaskCount = {
            ...emp.taskCount,
            ["newTask"]: emp.taskCount["newTask"] + 1,
          };
          return { ...emp, tasks: updatedTasks, taskCount: updatedTaskCount };
        }
        return emp;
      });
      return updatedEmployees;
    });
  };

  const acceptNewTask = (empId, tid) => {
    setUserData((previousEmployees) => {
      const updatedEmployees = previousEmployees.map((employee, eid) => {
        if (empId === eid + 1) {
          const copyTask = employee.tasks;
          const filterTasks = copyTask.filter((task, taskID) => taskID !== tid);
          const selectedTask = {
            ...employee.tasks[tid],
            ["newTask"]: false,
            ["active"]: true,
          };
          const updatedTask = [...filterTasks, selectedTask];

          const updatedTaskCount = {
            ...employee.taskCount,
            ["active"]: employee.taskCount["active"] + 1,
            ["newTask"]: employee.taskCount["newTask"] - 1,
          };
          return {
            ...employee,
            tasks: updatedTask,
            taskCount: updatedTaskCount,
          };
        }
        return employee;
      });
      return updatedEmployees;
    });
  };
  const completeTask = (empId, tid) => {
    setUserData((previousEmployees) => {
      const updatedEmployees = previousEmployees.map((employee, eid) => {
        if (empId === eid + 1) {
          const copyTask = employee.tasks;
          const filterTasks = copyTask.filter((task, taskID) => taskID !== tid);
          const selectedTask = {
            ...employee.tasks[tid],
            ["active"]: false,
            ["completed"]: true,
          };
          const updatedTask = [...filterTasks, selectedTask];

          const updatedTaskCount = {
            ...employee.taskCount,
            ["completed"]: employee.taskCount["completed"] + 1,
            ["active"]: employee.taskCount["active"] - 1,
          };
          return {
            ...employee,
            tasks: updatedTask,
            taskCount: updatedTaskCount,
          };
        }
        return employee;
      });
      return updatedEmployees;
    });
  };

  const failedTask = (empId, tid) => {
    setUserData((previousEmployees) => {
      const updatedEmployees = previousEmployees.map((employee, eid) => {
        if (empId === eid + 1) {
          const copyTasks = employee.tasks;
          const filterTasks = copyTasks.filter(
            (task, taskId) => taskId !== tid
          );
          const updatedTask = {
            ...employee.tasks[tid],
            ["active"]: false,
            ["failed"]: true,
          };
          const updatedTasks = [...filterTasks, updatedTask];

          const updatedTaskCount = {
            ...employee.taskCount,
            ["active"]: employee.taskCount["active"] - 1,
            ["failed"]: employee.taskCount["failed"] + 1,
          };
          return {
            ...employee,
            taskCount: updatedTaskCount,
            tasks: updatedTasks,
          };
        }
        return employee;
      });
      return updatedEmployees;
    });
  };
  console.log("UserData", userData);

  return (
    <div>
      <AuthContext.Provider
        value={{ userData, completeTask, createNewTask, acceptNewTask, failedTask }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
