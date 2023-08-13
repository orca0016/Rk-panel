import React from "react";
import "./App.css";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Dashbord from "./components/dashbord/dashbord.jsx";
import Aside from "./components/dashbord/Aside.jsx";
import User from "./components/dashbord/user.jsx";
import Setting from "./components/setitng/Setting";
import Task from "./components/task/Task";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { ApiContext } from "./context/dataContext";
import { dark } from "@mui/material/styles/createPalette";

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

function Main() {
  const [dark, setDark] = useState(false);
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
  return (
    <ApiContext.Provider
      value={{
        dark: dark,
        setDark: setDark,
      }}
    >
      <RouterProvider router={route} />
    </ApiContext.Provider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
