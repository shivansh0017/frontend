import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./dashboard";
import Employees from "./employees";
import Bar from "./bar";
import Form from "./form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Calendar from "./calendar/calendar";
import Projects from "./projects";
import LeaveRequests from "./leave";
import UpdateEmployeeDetails from "./employees/updateEmployeeDetails";

function AdminPage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/form" element={<Form />} />
              <Route path="/admin/edit-employee/" element={< UpdateEmployeeDetails/>}/>
              <Route path="/projects" element={<Projects />} />
              <Route path="/leave" element={<LeaveRequests />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminPage;
