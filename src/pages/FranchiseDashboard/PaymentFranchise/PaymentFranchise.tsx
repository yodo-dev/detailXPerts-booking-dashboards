import React from "react";
import MainLayout from "@layouts/MainLayout";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Legend } from "recharts";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import { Label } from "recharts";
import Linechart from "@components/Charts/Linechart";

const PaymentFranchise: React.FC = () => {
  //   const data = [
  //     { name: "Page A", uv: 1000, pv: 400, amt: 2400 },
  //     { name: "Page B", uv: 400, pv: 2400, amt: 2400 },
  //     { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
  //   ];

  const data = [
    { name: "Jan", Approved: 200, Pending: 10, Canceled: 200 },
    { name: "Feb", Approved: 200, Pending: 200, Canceled: 400 },
    { name: "Mar", Approved: 200, Pending: 200, Canceled: 200 },
    { name: "Apr", Approved: 304, Pending: 200, Canceled: 250 },
    { name: "May", Approved: 200, Pending: 125, Canceled: 400 },
    { name: "Jun", Approved: 200, Pending: 243, Canceled: 200 },
    { name: "Jul", Approved: 242, Pending: 114, Canceled: 400 },
    { name: "Aug", Approved: 329, Pending: 128, Canceled: 200 },
    { name: "Sep", Approved: 134, Pending: 249, Canceled: 400 },
    { name: "Oct", Approved: 249, Pending: 215, Canceled: 200 },
    { name: "Nov", Approved: 245, Pending: 213, Canceled: 400 },
    { name: "Dec", Approved: 420, Pending: 313, Canceled: 200 },
  ];

  const PieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#0088FE", "#0088FE", "#0088FE"];

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex justify-between mb-[50px]">
          <h1 className="!font-normal !text-[32px] !text-black">
            Payments Overview
          </h1>
          <input
            type="date"
            name=""
            id=""
            className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]"
          />
        </div>

        <div className="p-[30px] pt-[40px] bg-[#eeeeeed2] rounded-[8px] mb-[30px]">
          <div className="flex justify-between items-center mb-[40px]">
            <h3 className="!text-[20px] !font-bold ">Overview</h3>

            <div className="flex justify-between">
              {/* <h2 className="text-[22px] font-md mb-4 ">Billing Summary</h2> */}

              <div className="flex items-center space-x-6">
                {/* Approved */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-cyan-400"></span>
                  <span className="text-gray-900">Approved</span>
                </div>

                {/* Pending */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-yellow-300"></span>
                  <span className="text-gray-900">Pending</span>
                </div>

                {/* Rejected */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-red-500"></span>
                  <span className="text-gray-900">Rejected</span>
                </div>
              </div>
            </div>
          </div>
          {/* <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 16, fill: "#252525" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: "#252525" }}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="Approved"
                stroke="#FC5A41"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Canceled"
                stroke="#00D5D2"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Pending"
                stroke="#F9E844"
                strokeWidth={3}
              />

              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer> */}

          <Linechart data={data} />
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1 bg-[#eeeeeed2] relative flex flex-col justify-start items-center">
            <div className=" absolute top-20  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Payment Received
              </p>
            </div>
            <PieChart width={250} height={300}>
              {/* Full 360° background ring */}
              <Pie
                data={[{ value: 100 }]} // Dummy data to create a full circle
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={360} // Full circle
                fill="#E6FBFB" // Background color
                stroke="none"
                isAnimationActive={false}
              />

              {/* Actual data arc (80% of the circle) */}
              <Pie
                data={PieChartData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={288} // 80% of 360
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {PieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#07DB9B"} stroke="none" />
                ))}

                <Label
                  value="3.8K"
                  position="center"
                  style={{
                    fontSize: 38,
                    fontWeight: "bold",
                    fill: "#333",
                  }}
                />
              </Pie>
            </PieChart>
            <p className="text-center absolute bottom-14 text-[12px] font-normal">
              Revived
            </p>
          </div>

          <div className="col-span-1 bg-[#eeeeeed2] relative flex flex-col justify-start items-center">
            <div className=" absolute top-20  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Payment Received
              </p>
            </div>
            <PieChart width={250} height={300}>
              {/* Full 360° background ring */}
              <Pie
                data={[{ value: 100 }]} // Dummy data to create a full circle
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={360} // Full circle
                fill="#FF874E26" // Background color
                stroke="none"
                isAnimationActive={false}
              />

              {/* Actual data arc (80% of the circle) */}
              <Pie
                data={PieChartData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={288} // 80% of 360
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {PieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#FBBC05"} stroke="none" />
                ))}

                <Label
                  value="22K"
                  position="center"
                  style={{
                    fontSize: 38,
                    fontWeight: "bold",
                    fill: "#333",
                  }}
                />
              </Pie>
            </PieChart>
            <p className="text-center absolute bottom-14 text-[12px] font-normal">
              Revived
            </p>
          </div>

          <div className="col-span-1 bg-[#eeeeeed2] relative flex flex-col justify-start items-center">
            <div className=" absolute top-20  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Payment Received
              </p>
            </div>
            <PieChart width={250} height={300}>
              {/* Full 360° background ring */}
              <Pie
                data={[{ value: 100 }]} // Dummy data to create a full circle
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={360} // Full circle
                fill="#E6FBFB" // Background color
                stroke="none"
                isAnimationActive={false}
              />

              {/* Actual data arc (80% of the circle) */}
              <Pie
                data={PieChartData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={288} // 80% of 360
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {PieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#E0004D"} stroke="none" />
                ))}

                <Label
                  value="$4"
                  position="center"
                  style={{
                    fontSize: 38,
                    fontWeight: "bold",
                    fill: "#333",
                  }}
                />
              </Pie>
            </PieChart>
            <p className="text-center absolute bottom-14 text-[12px] font-normal">
              Revived
            </p>
          </div>

          <div className="col-span-1 bg-[#eeeeeed2] relative flex flex-col justify-start items-center">
            <div className=" absolute top-20  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Payment Received
              </p>
            </div>
            <PieChart width={250} height={300}>
              {/* Full 360° background ring */}
              <Pie
                data={[{ value: 100 }]} // Dummy data to create a full circle
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={360} // Full circle
                fill="#E6FBFB" // Background color
                stroke="none"
                isAnimationActive={false}
              />

              {/* Actual data arc (80% of the circle) */}
              <Pie
                data={PieChartData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={75}
                startAngle={0}
                endAngle={288} // 80% of 360
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {PieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#07DB9B"} stroke="none" />
                ))}

                <Label
                  value="3.8K"
                  position="center"
                  style={{
                    fontSize: 38,
                    fontWeight: "bold",
                    fill: "#333",
                  }}
                />
              </Pie>
            </PieChart>
            <p className="text-center absolute bottom-14 text-[12px] font-normal">
              Revived
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentFranchise;
