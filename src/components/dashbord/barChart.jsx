import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    pv: 2400,
  },
  {
    name: "2",
    pv: 1398,
  },
  {
    name: "3",
    pv: 9800,
  },
  {
    name: "4",
    pv: 3908,

  },
  {
    name: "5",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    pv: 3800,

  },
  {
    name: "7",
    pv: 4300,
  },
  {
    name: "8",
    pv: 4300,
  },
  {
    name: "9",
    pv: 4300,
  },
  {
    name: "10",
    pv: 4300,
  },
  {
    name: "11",
    pv: 4300,
  },
  {
    name: "12",
    pv: 4300,
  },
  {
    name: "13",
    pv: 4300,
  },
  {
    name: "14",
    pv: 4300,
  },
  {
    name: "15",
    pv: 4300,
  },
  {
    name: "16",
    pv: 4300,

  },
  {
    name: "17",
    pv: 4300,

  },
  {
    name: "18",
    pv: 4300,
  },
  {
    name: "19",
    pv: 4300,
  },
  {
    name: "20",
    pv: 4300,
  },
  {
    name: "21",
    pv: 4300,
  },
  {
    name: "22",
    pv: 4300,
  },
  {
    name: "23",
    pv: 4300,
  },
  {
    name: "24",
    pv: 4300,
  },
  {
    name: "24",
    pv: 4300,
  },
  {
    name: "25",
    pv: 4300,
  },
  {
    name: "26",
    pv: 4300,

  },
  {
    name: "27",
    pv: 4300,

  },
  {
    name: "28",
    pv: 4300,

  },
  {
    name: "29",
    pv: 4300,

  },
  {
    name: "30",
    pv: 1300,

  },
];

const Chart = () => {
  return (
    <>
      
<ResponsiveContainer>

      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" style={{ borderRadius: "10px" }} />
      </BarChart>
        </ResponsiveContainer>
    </>
  );
};
export default Chart;

// better comment
// * better comment
// ! better comment
// ? better comment
//TODO:  better comment
