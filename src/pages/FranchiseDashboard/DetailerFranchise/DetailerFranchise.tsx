import React from "react";
import MainLayout from "@layouts/MainLayout";
import arrowDown from "../../../assets/svgs/arrow-down.svg";
import { ReactSVG } from "react-svg";
import VehicleCard from "@components/CarCards/CarCards";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import { Label } from "recharts";
import Linechart from "@components/Charts/Linechart";
import DownloadButton from "./Components/ButtonComponent"

const DetailerFranchise: React.FC = () => {
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

  return (
    <MainLayout>
      <div className="px-[40px]">
        <div>
          <h2 className="!text-[32px] mb-[60px] font-medium">
            Carla Ekstrom Bothman
          </h2>
          
          <div className="flex items-center justify-between mb-[29px] gap-3">
            <div>
              <p className="font-semibold text-[20px]">All Bookings</p>
            </div>
            <div className="flex gap-[10px]">
            
            <div className=" relative">
              <select className="select-style !border !border-[#082042] pt-[16px] pb-[16px] rounded-xl !pe-[45px] ps-[15px]">
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
              </select>

              <div className="absolute top-[30%] right-2">
                <ReactSVG src={arrowDown} />
              </div>
            </div>

            <div>
              <input
                className="select-style !border !border-[#082042] pt-[16px] pb-[16px] rounded-xl !pe-[15px] ps-[15px]"
                type="date"
                name=""
                id=""
              />
            </div>

            </div>
          </div>

          <div className="grid grid-cols-3 mb-[60px]">

          <div className="col-span-1 flex justify-center items-center">
            <VehicleCard
              vehicleName="Honda Civic"
              vehicleYear={2025}
              //   vehicleImage={carImage}
              fromLocation={{
                title: "2972 Westheimer",
                address: "Rd. Santa Ana, Illinois 85486",
              }}
              toLocation={{
                title: "8502 Preston",
                address: "Rd. Inglewood, Maine 98380",
              }}
              customer={{
                name: "Darrell Steward",
                company: "Mariene, LTD",
                avatar:
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
              }}
            />
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <VehicleCard
              vehicleName="Honda Civic"
              vehicleYear={2025}
              //   vehicleImage={carImage}
              fromLocation={{
                title: "2972 Westheimer",
                address: "Rd. Santa Ana, Illinois 85486",
              }}
              toLocation={{
                title: "8502 Preston",
                address: "Rd. Inglewood, Maine 98380",
              }}
              customer={{
                name: "Darrell Steward",
                company: "Mariene, LTD",
                avatar:
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
              }}
            />
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <VehicleCard
              vehicleName="Honda Civic"
              vehicleYear={2025}
              //   vehicleImage={carImage}
              fromLocation={{
                title: "2972 Westheimer",
                address: "Rd. Santa Ana, Illinois 85486",
              }}
              toLocation={{
                title: "8502 Preston",
                address: "Rd. Inglewood, Maine 98380",
              }}
              customer={{
                name: "Darrell Steward",
                company: "Mariene, LTD",
                avatar:
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
              }}
            />
          </div>
          </div>

          <div className="default_container p-4 overflow-x-auto">
        <div className="flex justify-between mb-[50px]">
            <div>
          <h1 className="!font-normal !text-[32px] !text-black">
            Payments Overview
          </h1>
            </div>
            <div className="flex gap-[10px]">
            <DownloadButton 
            text="Download Report"
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
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailerFranchise;
