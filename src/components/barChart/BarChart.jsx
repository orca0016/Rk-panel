import "./BarChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
const data = [
  { name: "b1", value: 3 },
  { name: "b2", value: 42 },
  { name: "b3", value: 78 },
  { name: "b4", value: 15 },
  { name: "b5", value: 67 },
  { name: "b6", value: 91 },
  { name: "b7", value: 34 },
  { name: "b8", value: 2 },
  { name: "b9", value: 50 },
  { name: "b10", value: 85 },
  { name: "b11", value: 12 },
  { name: "b12", value: 63 },
  { name: "b13", value: 27 },
  { name: "b14", value: 98 },
  { name: "b15", value: 71 },
  { name: "b16", value: 45 },
  { name: "b17", value: 10 },
  { name: "b18", value: 56 },
  { name: "b19", value: 38 },
  { name: "b20", value: 83 },
  { name: "b21", value: 19 },
  { name: "b22", value: 76 },
  { name: "b23", value: 31 },
  { name: "b24", value: 59 },
  { name: "b25", value: 47 },
  { name: "b26", value: 6 },
  { name: "b27", value: 94 },
  { name: "b28", value: 23 },
  { name: "b29", value: 52 },
  { name: "b30", value: 80 },
];

function BarCharts() {
  const { dark } = useContext(ApiContext);

  return (
    <div className={`h-barChart`}>
      <h1 className="h-h1-charts">نمودار x</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className={dark ? "light1" : null}
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="4" />
          <XAxis dataKey="name" scale="point" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#323232",
              border: "none",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "white" }}
          />
          <Legend />
          <Bar dataKey="value" fill="#9AB1F8" barSize={10} radius={3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
