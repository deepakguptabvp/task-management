import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-400">
      <h2>Todo App</h2>
      <ul>
        <li>All Tasks</li>
        <li>Completed</li>
        <li>Pending</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
