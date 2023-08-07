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

function DashboardLayout() {
  return (
    <div className="container-dashbord">
      <Dashbord />
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
      <div style={{display:"flex" , flexDirection:"column" , width:"100%"}}>
      <User/>
        <Outlet />
      </div>
    </>
  );
}

const route = createBrowserRouter([
  { path: "/", element: <App />},
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element:<Dash/>,
        children:[ {
          path: "setting",
          element: <Setting/>
        },
        {
          path: "task",
          element: <Task/>
        }, {
          path: "contact",
          element: <p>nnnnnnnnnnnnnnnnnnnnnnnnn</p>
        }, {
          path: "dash",
          element: <p>dashboard</p>
        },
      ]
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
