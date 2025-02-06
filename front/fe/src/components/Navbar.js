import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-700">Smart Notes</h1>
      <div>
        <a href="/dashboard" className="mx-4 text-gray-700 hover:text-purple-600">Dashboard</a>
        <a href="/settings" className="mx-4 text-gray-700 hover:text-purple-600">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
