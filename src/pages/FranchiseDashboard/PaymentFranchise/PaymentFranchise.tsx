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

  const PieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];


  const data = [
    {
      name: "Jan",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Feb",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "Mar",
      "Loyal Customers": 240,
      "New Customers": 50,
      "Unique Customers": 160,
    },
    {
      name: "Apr",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "May",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Jun",
      "Loyal Customers": 180,
      "New Customers": 20,
      "Unique Customers": 70,
    },
    {
      name: "Jul",
      "Loyal Customers": 160,
      "New Customers": 10,
      "Unique Customers": 40,
    },
    {
      name: "Aug",
      "Loyal Customers": 180,
      "New Customers": 20,
      "Unique Customers": 70,
    },
    {
      name: "Sep",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Oct",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "Nov",
      "Loyal Customers": 240,
      "New Customers": 50,
      "Unique Customers": 160,
    },
    {
      name: "Dec",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
  ];

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-wrap gap-1.5 justify-between mb-[40px]">
          <h1 className="!font-normal sm:mb-0 mb-[15px] !text-[32px] !text-black">
            Payments Overview
          </h1>
          <input
            type="date"
            name=""
            id=""
            className="border px-[15px] bg-[#fff]] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]"
          />
        </div>

        <div className="lg:pt-[21px] lg:pl-[30px] lg:pr-[67px] lg:pb-[27px] bg-[#fff] rounded-[8px] pb-[25px] mb-[20px]">
          <div className="flex flex-wrap gap-1.5 justify-between items-center mb-[40px] pt-[18px] ps-[20px] pe-[20px]">
            <h3 className="!text-[20px] !font-semibold ">Overview</h3>

            <div className="flex justify-between">
              {/* <h2 className="text-[22px] font-md mb-4 ">Billing Summary</h2> */}

              <div className="flex flex-wrap items-center sm:gap-0 gap-2 space-x-6">
                {/* Approved */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-cyan-400"></span>
                  <span className="text-gray-900">$100k+ Sales</span>
                </div>

                {/* Pending */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-yellow-300"></span>
                  <span className="text-gray-900">200+ Bookings Completed</span>
                </div>

                {/* Rejected */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-red-500"></span>
                  <span className="text-gray-900">5 Canceled Bookings</span>
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

          <Linechart
            data={data}
            legend={false}
            color1={"#00D5D2"}
            color2={"#FC5A41"}
            color3={"#F9E844"}
          />
        </div>

        <div className="grid grid-cols-4 gap-[30px]">
          <div className="lg:col-span-1 col-span-4 rounded-[12px] md:col-span-2 sm:col-span-4 bg-[#fff] relative flex flex-col justify-start items-center">
            <div className=" absolute top-10  ">
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

          <div className="lg:col-span-1 col-span-4 rounded-[12px] md:col-span-2 sm:col-span-4 bg-[#fff] relative flex flex-col justify-start items-center">
            <div className=" absolute top-10  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Payment Inprocess
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
              Remaining
            </p>
          </div>

          <div className="lg:col-span-1 col-span-4 rounded-[12px] md:col-span-2 sm:col-span-4 bg-[#fff] relative flex flex-col justify-start items-center">
            <div className=" absolute top-10  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Canceled
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
              Closes
            </p>
          </div>

          <div className="lg:col-span-1 col-span-4 rounded-[12px] md:col-span-2 sm:col-span-4 bg-[#fff] relative flex flex-col justify-start items-center">
            <div className=" absolute top-10  ">
              <p className="text-[14px] font-normal w-[100%] ">
                Booking Closes
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
