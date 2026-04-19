import { NavLink, Outlet } from "react-router-dom";
import { FaChartLine, FaTasks, FaUser } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 shadow-2xl border-r border-gray-600 flex flex-col">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-b from-indigo-400  to-purple-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          {/* <p className="text-xs text-gray-400 mt-1">Task Management System</p> */}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 flex-1">
          {/* Dashboard */}
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isActive
                  ? "bg-gray-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-600 hover:text-white"
              }`
            }
          >
            <FaChartLine className="text-lg" />
            Dashboard
          </NavLink>

          {/* Tasks */}
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            <FaTasks className="text-lg" />
            Tasks
          </NavLink>

          {/* Profile */}
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isActive
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-green-600 hover:text-white"
              }`
            }
          >
            <FaUser className="text-lg" />
            Profile
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            © 2026 Task Manager
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex flex-col items-center bg-gray-900 text-white p-6 shadow-2xl border-gray-600 border-b border-gray-600">
          <h1 className="text-3xl font-bold bg-gradient-to-b from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Task Management App
          </h1>
          <p className=" bg-gradient-to-b from-indigo-400 to-purple-400 bg-clip-text text-transparent text-sm mt-1">
            Manage your tasks efficiently
          </p>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className=" text-white ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
