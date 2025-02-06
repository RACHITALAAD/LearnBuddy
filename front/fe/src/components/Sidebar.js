import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-purple-700 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold">Menu</h2>
      <nav className="mt-6">
        <Link to="/" className="block py-2 px-4 hover:bg-purple-800 rounded">Home</Link>
        <Link to="/dashboard" className="block py-2 px-4 hover:bg-purple-800 rounded">Dashboard</Link>
        <Link to="/notes" className="block py-2 px-4 hover:bg-purple-800 rounded">Notes</Link>
        <Link to="/summarizer" className="block py-2 px-4 hover:bg-purple-800 rounded">AI Summarizer</Link>
        <Link to="/settings" className="block py-2 px-4 hover:bg-purple-800 rounded">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
