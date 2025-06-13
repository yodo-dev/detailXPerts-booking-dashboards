import React from "react";
import MainLayout from "@layouts/MainLayout";
import arrowDown from "../../../assets/svgs/arrow-down.svg";
import { ReactSVG } from "react-svg";
import VehicleCard from "@components/CarCards/CarCards";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import { Label } from "recharts";
import Linechart from "@components/Charts/Linechart";
import { ArrowLeft } from "lucide-react";
import SelectField from "@components/SelectField/SelectField";
// import DownloadButton from "../src/pages/FranchiseDashboard/DetailerFranchise/Components/ButtonComponent";

const DetailerFranchise: React.FC = () => {
  return (
    <MainLayout>
      <div className="px-[40px]">
        <div className="bg-red-500">
          <h2 className="!text-[32px] mb-[60px] font-medium">
            <ArrowLeft /> Add User
          </h2>
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
            {/* <!-- Role --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Role
              </label>
              <select className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Select</option>
              </select>
            </div>

            {/* <!-- First and Last Name --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Phoenix"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Baker"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* <!-- Email Address --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="phoenix@leadgenerations.com"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* <!-- Contact Number --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <div className="flex items-center border rounded-md shadow-sm px-2 py-2 space-x-2">
                {/* <!-- Flag Placeholder --> */}
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="US"
                  className="w-6 h-4 rounded-sm"
                />
                <input
                  type="text"
                  placeholder="+1 782309839828"
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            {/* <!-- About --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                About
              </label>
              <textarea
                rows="3"
                placeholder="Customer Support Team"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 text-center mb-6 w-[80%]">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl text-gray-500">
                  <ReactSVG src={uploadServer} />
                </span>
              </div>
              <p className="text-sm text-[#5B5B5B]">
                <strong className="text-black">Click to upload</strong> or drag
                and drop
              </p>
              <p className="text-[12px] text-[#5B5B5B] mt-1">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailerFranchise;
