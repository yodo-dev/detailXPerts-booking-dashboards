import React from "react";
import MainLayout from "@layouts/MainLayout";
import arrowDown from "../../../assets/svgs/arrow-down.svg";
import { ReactSVG } from "react-svg";
import VehicleCard from "@components/CarCards/CarCards";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import { Label } from "recharts";
import Linechart from "@components/Charts/Linechart";
import DownloadButton from "./Components/ButtonComponent";

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
          <div>
            <div className="bg-white default_container py-4 px-6 mb-[22px]" style={{backdropFilter:" blur(10px)"}}>

            <div className="flex items-center flex-wrap justify-between mb-[29px] gap-3 ">
              <div>
                <p className="font-semibold text-[20px]">All Bookings</p>
              </div>
              <div className="flex gap-[10px] flex-wrap">
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

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mb-[6px]">
              <div className="flex justify-center items-center">
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
            </div>

            <div className="default_container p-4 overflow-x-auto">
              <div className="flex justify-between flex-wrap mb-[24px]">
                <div className="">
                  <h1 className="md:mb-4 lg:mb-0 mb-4 sm:mb-4 !font-normal !text-[32px] !text-black">
                    Payments Overview
                  </h1>
                </div>
                <div className="flex gap-[10px] flex-wrap">
                  <DownloadButton text="Download Report" />
                  <input
                    type="date"
                    name=""
                    id=""
                    className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]"
                  />
                </div>
              </div>

              <div className="lg:pt-[21px] lg:pl-[30px] lg:pr-[67px] lg:pb-[27px] bg-[#fff] rounded-[8px] pb-[25px] mb-[30px]">
          <div className="flex flex-wrap gap-1.5 justify-between items-center mb-[40px] pt-[18px] ps-[20px] pe-[20px]">
            <h3 className="!text-[20px] !font-semibold ">Overview</h3>

            <div className="flex justify-between">
              {/* <h2 className="text-[22px] font-md mb-4 ">Billing Summary</h2> */}

              <div className="flex flex-wrap items-center sm:gap-0 gap-2 space-x-6">
                {/* Approved */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-[#00D5D2]"></span>
                  <span className="text-gray-900">$10K+ Sales</span>
                </div>

                {/* Pending */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-[#F9E844]"></span>
                  <span className="text-gray-900">25% Net Profit</span>
                </div>

                {/* Rejected */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-[#FC5A41]"></span>
                  <span className="text-gray-900">40 Good Deliveries</span>
                </div>
              </div>
            </div>
          </div>

          <Linechart data={data} />
        </div>

              

              <div className="grid grid-cols-4 gap-[30px]">
              <div className="lg:col-span-1 col-span-4 h-[370px] sm:col-span-4 bg-[#fff]  relative rounded-[20px] flex flex-col justify-start items-center">
                  <div className=" absolute top-10  text-center ">
                    <p className="text-[14px] font-normal w-[100%] ">
                    Show Rate
                    </p>
                    <p className="text-[22px] font-medium w-[100%] ">
                    $25K
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
                        <Cell
                          key={`cell-${index}`}
                          fill={"#07DB9B"}
                          stroke="none"
                        />
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
                  <p className="text-center absolute bottom-32 text-[12px] font-normal">
                  Sales
                  </p>
                  <div className="flex gap-2 pt-[19px]">
                  <div className="flex items-center sm:mb-0 mb-2 space-x-2">
                        <span className="w-4 h-4 rounded bg-[#07DB9B]"></span>
                        <span className="text-gray-900 text-[14px]">Complete</span>
                      </div>
                      <div className="flex items-center sm:mb-0 mb-2 space-x-2">
                        <span className="w-4 h-4 rounded bg-[#E6FBFB]"></span>
                        <span className="text-gray-900 text-[14px]">In Process</span>
                      </div>

                  </div>
                </div>
                       
             
                       <div className="lg:col-span-3 col-span-4 sm:col-span-4 w-full bg-white rounded-[12px] px-[40px] flex flex-col justify-center">
                     <div className="flex justify-between items-center py-[24px] border-b border-[#b0adad3d]">
                       <p className="font-medium">Highest Amount Earned</p>
                       <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">$4.5K</p>
                     </div>
                     <div className="flex justify-between items-center pt-[24px] pb-[24px] border-b border-[#b0adad3d]">
                       <p className="font-medium">Satisfaction Rate</p>
                       <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">97%</p>
                     </div>
                     <div className="flex justify-between items-center pt-[24px] pb-[24px] border-b border-[#b0adad3d]">
                       <p className="font-medium">Total Revenue Generated</p>
                       <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">$25K</p>
                     </div>
                     <div className="flex justify-between items-center pt-[24px] pb-[24px]  border-b border-[#b0adad3d]">
                       <p className="font-medium">Recurring Customers</p>
                       <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">45%</p>
                     </div>
                     <div className="flex justify-between items-center pt-[24px] mb-[44px] ">
                       <p className="font-medium">Most Selling Area</p>
                       <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] px-[38px] rounded-[8px]">Baltimore</p>
                     </div>
                   </div>
                     </div>


            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailerFranchise;
