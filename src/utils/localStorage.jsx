const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@e.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 0
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
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 0
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
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 0
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
        description: "Create a presentation for the upcoming stakeholder meeting.",
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
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 0
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
        description: "Ensure the development environment is ready for the team.",
        date: "2024-10-11",
        category: "Setup",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Analyze performance metrics",
        description: "Review application performance metrics and report findings.",
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
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 0
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



const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@e.com",
    password: "123",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return {employees, admin}
}