import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

import useRechart from "../../Hooks/useRechart";

const Dashboard = () => {
  const [rechartData] = useRechart();
  console.log(rechartData);

  return (
    <>
      <h2 className="text-center font-black text-3xl md:text-5xl mt-10">
        Dashboard
      </h2>
      <div className="md:w-[85%] mx-auto grid md:grid-cols-2 md:gap-5">
        <div className="md:m-10 mx-auto ">
          <h2 className="font-semibold text-indigo-600 text-3xl my-10 text-center">
            Month Wise sales
          </h2>
          <LineChart
            width={400}
            height={500}
            data={rechartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="md:m-10 mx-auto">
          <h2 className="font-semibold text-indigo-600 text-3xl my-10 text-center">
            Investment vs Revenue
          </h2>
          <AreaChart
            width={400}
            height={500}
            data={rechartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
        <div className="md:m-10 mx-auto">
          <h2 className="font-semibold text-indigo-600 text-3xl my-10 text-center">
            Sell vs Investment vs Revenue
          </h2>
          <ComposedChart
            width={400}
            height={500}
            data={rechartData}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="month"
              label={{
                value: "Month",
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{
                value: "Investment",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
          </ComposedChart>
        </div>
        <div className="md:m-10 mx-auto">
          <h2 className="font-semibold text-indigo-600 text-3xl my-10 text-center">
            sell vs Investment
          </h2>
          <BarChart
            width={400}
            height={500}
            data={rechartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="sell" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="investment" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
