import React from "react";
import MainLayout from "@layouts/MainLayout";
import downloadBtn from "../../../assets/svgs/downloadBtn.svg";
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
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { ReactSVG } from "react-svg";

const ReportsFranchise: React.FC = () => {
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:mb-11 mb-8">
          <h1 className="!font-normal !text-[32px] !text-black">
            Performance Report
          </h1>

          <div className="flex gap-3">
            <PrimaryButton
              img={downloadBtn}
              showImg={true}
              btnText="Download Report"
              btnClass="bg-[#003CA6] rounded-xl text-white !px-[14px] !py-[18px] md:w-[235px]"
              btnTextClass="text-[16px]"
              onClick={() => console.log("Button clicked")}
            />

            <input
              type="date"
              name=""
              id=""
              className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]"
            />
          </div>
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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false} // Removes bottom axis line
                tickLine={false} // Removes small tick lines/>
                tick={{ fontSize: 16, fill: "#252525" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: "#252525" }}
              />

              <Tooltip />

              {/* <Legend /> */}

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
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 p-6 bg-[#f9fbfd] rounded-lg">
          {/* Left Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center w-full lg:w-1/3">
            <h4 className="!text-[14px] !font-medium text-gray-500 mb-2">
              Total Income
            </h4>
            <h2 className="!text-[30px] !font-bold mb-4">$10K</h2>

            {/* Circle Progress — Simulated (use a library for real circle) */}
            <div className="relative w-[120px] h-[120px] mb-4">
              <div className="absolute inset-0 rounded-full border-[10px] border-green-400 border-t-transparent animate-spin-slow"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold">80%</span>
                {/* <span className="text-xs text-gray-500">Increased income</span> */}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1">
            <div className="space-y-5">
              <StatRow label="Highest Amount Earned" value="$4.5K" />
              <StatRow label="Satisfaction Rate" value="97%" />
              <StatRow label="Total Revenue Generated" value="$25K" />
              <StatRow label="Recurring Customers" value="45%" />
              <StatRow label="Most Selling Area" value="Baltimore" bold />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const StatRow = ({ label, value, bold }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600 !text-normal !text-[#252525] !text-[16px]">
      {label}
    </span>
    <span
      className={`px-4 py-1  rounded-md text-sm ${
        bold ? "font-semibold" : "font-medium"
      } !font-bold !text-[22px]`}
    >
      {value}
    </span>
  </div>
);

export default ReportsFranchise;
