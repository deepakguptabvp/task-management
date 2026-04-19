import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Profile from "./pages/dashboard/Profile";
import Tasks from "./pages/dashboard/Tasks";

const App = () => {
  return (
    <Routes>
      {/* Root Layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} /> {/* Default */}
        <Route path="tasks" element={<Tasks />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
