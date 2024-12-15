import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (localUserData) {
      setUser(localUserData.role);
      setLoggedInUserData(localUserData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@e.com" && password === "123") {
      const admin = { firstName: "Admin" };
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard setUser={setUser} adminData={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard
          setUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;
