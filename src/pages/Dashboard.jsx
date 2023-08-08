import React from "react";
import BarCharts from "../components/barChart/BarChart";
import AreaCharts from "../components/areaChart/AreaChart";
import PieChartSwiper from "../components/pieChart/PieChartSwiper";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="h-dashboard-container">
      <BarCharts />
      <AreaCharts />
      <PieChartSwiper />
    </div>
  );
}

export default Dashboard;
