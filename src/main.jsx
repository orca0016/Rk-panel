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
import {getAlldata} from "./service/data"
import { useEffect } from "react";

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

    const [getData ,  setData ]  = useState([
      {
        titleTask: [],
        lineTernBox: [],
        task: [],
        profile: [
          {
            fname: [],
            lname: [],
            phoneNumber: [],
            email: [],
            numberStudent: [],
            bui: [],
            srcProfile: []
          }
        ]
      }
    ])
    console.log(getData);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: alldata } = await getAlldata();
          setData(alldata);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, []);




  const   getMode= ()=>{
    const intialModal =  localStorage.getItem('mode');
    if (intialModal == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return true
        }else{
          return false
        }
    }else{
      return JSON.parse(localStorage.getItem("mode"))
    }
  }
  const [dark, setDark] = useState(getMode());
  useEffect(()=>{
      localStorage.setItem("mode" , JSON.stringify(dark))
  },[dark])
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
