import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({setUser, adminData}) => {

  return (
    <div className="h-screen p-5">
      <Header setUser = {setUser} user= {adminData}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
