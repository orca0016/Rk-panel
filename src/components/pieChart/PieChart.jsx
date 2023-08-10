import React from "react";
import "./PieChart.css";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
const data02 = [
  { name: "Group A", value: 2400, color: "red" },
  { name: "Group B", value: 4567, color: "green" },
  { name: "Group C", value: 1398, color: "yellow" },
  { name: "Group D", value: 9800, color: "blue" },
  { name: "Group E", value: 3908, color: "pink" },
  { name: "Group F", value: 4800, color: "cyan" },
];
function PieCharts() {
  return (
    <>
      <h1 style={{ marginTop: "70px" }} className="h-h1-charts">
        نمودار x
      </h1>
      <div style={{ maxWidth: "400px", height: "240px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={data02}
              // cx={500}
              // cy={200}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              fill="#82ca9d"
            >
              {data02.map((e) => {
                return <Cell key={e.color} fill={e.color} stroke="none" />;
              })}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#323232",
                border: "none",
                borderRadius: "10px",
              }}
              itemStyle={{ color: "white" }}
            />
            <Legend iconType="circle" margin={{ bottom: 20 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default PieCharts;
