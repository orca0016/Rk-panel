import React from "react";
import "./App.css";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Dashbord from "./components/dashbord/dashbord.jsx";
import Aside from "./components/dashbord/Aside.jsx";
import User from "./components/dashbord/user.jsx";
import Setting from "./components/setitng/Setting";
import Task from "./components/task/Task";
import PieChartSwiper from "./components/pieChart/PieChartSwiper";
import Dashboard from "./pages/Dashboard";

function DashboardLayout() {
  return (
    <div className="idkjesus">
      <div className="container-dashbord">
        <Dashbord />
      </div>
      <div className="cont-dash">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
}
function Dash() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <User />
        <Outlet />
      </div>
    </>
  );
}

const route = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dash />,
        children: [
          {
            path: "setting",
            element: <Setting />,
          },
          {
            path: "task",
            element: <Task />,
          },
          {
            path: "contact",
            element: <p>last check error</p>,
          },
          {
            path: "dash",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <App /> */}
  </React.StrictMode>
);
