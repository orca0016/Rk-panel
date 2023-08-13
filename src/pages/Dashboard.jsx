import React from "react";
import BarCharts from "../components/barChart/BarChart";
import AreaCharts from "../components/areaChart/AreaChart";
import PieChartSwiper from "../components/pieChart/PieChartSwiper";
import "./Dashboard.css";
import Calendars from "../components/calendar/Calandar";
import { useContext } from "react";
import { ApiContext } from "../context/dataContext";
function Dashboard() {
  const {dark } = useContext(ApiContext);

  return (
    <div className={`h-dashboard-container ${dark ? "light1" : null}`}>
      <BarCharts />
      <AreaCharts />
      <div className="h-pieChart-container">
        <PieChartSwiper />
      </div>
      <Calendars />
    </div>
  );
}

export default Dashboard;
