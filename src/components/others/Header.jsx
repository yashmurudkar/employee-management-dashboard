import React from "react";

const Header = ({ setUser, user }) => {

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser", "");
    setUser("");
  };
  return (
    <header className="flex justify-between items-end">
      <div>
        <h1 className="text-2xl font-medium">
          Hello, <br />{" "}
          <span className="text-3xl font-semibold">{user.firstName} 👋</span>
        </h1>
      </div>
      <button
        className="bg-red-500 text-lg font-medium py-2 px-4 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
