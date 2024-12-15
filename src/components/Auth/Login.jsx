import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("admin@e.com");
  const [password, setPassword] = useState("123");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-3xl">Employee Management Dashboard</h1>
      <div className="border-2 rounded-xl p-20 border-emerald-600 mt-10">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            className=" bg-transparent text-xl placeholder-gray-500 border-2 outline-none border-emerald-600 rounded-full py-3 px-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter your password"
            className=" bg-transparent text-xl placeholder-gray-500 border-2 outline-none border-emerald-600 rounded-full py-3 px-5 mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className=" bg-emerald-600 text-xl border-none outline-none  rounded-full py-3 px-5 mt-4">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
