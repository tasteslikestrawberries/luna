import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.scss";
import Dashboard from "./features/Dashboard";
import Files from "./features/Files";
import Profile from "./features/Profile";
import Reminders from "./features/Reminders";

function App() {
  return (
    <BrowserRouter>
      <div className="flexWrapper">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/files" element={<Files />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
