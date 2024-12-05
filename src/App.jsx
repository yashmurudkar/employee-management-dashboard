import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [empData, setEmpData] = useState(null);
  // const authData = useContext(AuthContext);
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
      // console.log("Admin", admin)
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
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {/* {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard setUser={setUser} data={loggedInUserData} />
      ) : user ? (
        <EmployeeDashboard setUser={setUser} data={loggedInUserData} />
      ) : null} */}

      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard setUser={setUser} data={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard setUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
