import React, { useRef, useState } from "react";
import MainLayout from "@layouts/MainLayout";
import arrowDown from "../../../assets/svgs/arrow-down.svg";
import { ReactSVG } from "react-svg";
import VehicleCard from "@components/CarCards/CarCards";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import { Label } from "recharts";
import Linechart from "@components/Charts/Linechart";
import DownloadButton from "../DetailerFranchise/Components/ButtonComponent";
import userImg from "../../../assets/images/user-profile-img.png";
import LocationIcon from "../../../assets/svgs/location.svg";
import StartIcon from "../../../assets/svgs/Star 3.svg";
import editIcon from "../../../assets/svgs/edit-2.svg";
import { FiClock, FiEdit2 } from "react-icons/fi";
import { PencilLine } from "lucide-react";
import { PrimaryButton } from "@components/Buttons/CommonButtons";

const AddCustomerFranchise: React.FC = () => {
  const [fromTime, setFromTime] = useState("10:59:30");
  const [toTime, setToTime] = useState("10:59:30");
  const [updateTimer, setUpdateTimer] = useState(true);
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

  const timeRef1 = useRef(null);
  const timeRef2 = useRef(null);

  const openTimePicker1 = () => {
    timeRef1.current.showPicker();
  };

  const openTimePicker2 = () => {
    timeRef2.current.showPicker();
  };

  return (
    <MainLayout>
      <div className="default_container px-[40px]">
        <div className="">
          {/* Top Person Card */}
          <div className=" bg-white border-[1px] border-[#e6e6e6] flex justify-between items-center p-[26px] pe-[120px] rounded-2xl mb-5">
            <div className="flex gap-2 ">
              <div className="w-[95px] h-[95px] flex items-center justify-center border border-[#25252526] rounded-full">
                <img
                  src={userImg}
                  alt=""
                  className="w-[95px] h-[95px] rounded-full"
                />
              </div>

              <div className="flex items-start justify-center flex-col">
                <div className="text-sm cursor-pointer text-[20px] font-semibold">
                  Luis Froza
                </div>
                <div className="text-xs text-gray-400 flex gap-1 mt-1">
                  <p className="text-[15px]">abc@someone.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <ReactSVG src={StartIcon} />
                <span>4.5 (237)</span>
              </div>
              <p>Detailer</p>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <span className="text-[#2929297c] font-medium">Position</span>
              </div>
              <p className="font-medium">Detailer</p>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <span className="text-[#2929297c] font-medium">
                  Joining Date
                </span>
              </div>
              <p className="font-medium">21-08-2025</p>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <span className="text-[#2929297c] font-medium">
                  Total Bookigns
                </span>
              </div>
              <p className="font-medium">400+</p>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <span className="text-[#2929297c] font-medium">Service</span>
              </div>
              <p className="font-medium">Car Radiator</p>
              <p className="font-medium">Specialist</p>
            </div>

            <div>
              <div className="flex mb-[5px]">
                <span className="text-[#2929297c] font-medium">
                  Profile Status
                </span>
              </div>
              <p className="text-center bg-green-100 text-[#90EE90] text-sm font-medium me-2 px-0.5 w-fit px-[10px] py-1.5 rounded-full dark:bg-[#0676471A] dark:text-[#067647]">
                Active
              </p>
            </div>
          </div>
          {/* Top Person Card */}

          {/* Availability Card */}
          <div className=" bg-white border-[1px] border-[#e6e6e6] p-[26px] rounded-2xl mb-5">
            <div className=" flex justify-between items-center mb-[20px]">
              <h4 className="text-black">Availability</h4>
              {/* <ReactSVG
                onClick={() => setUpdateTimer(!updateTimer)}
                className="cursor-pointer text-white"
                src={editIcon}
              /> */}
              <span
                className={`${
                  updateTimer
                    ? "p-2"
                    : "text-white bg-blue-500 p-2 rounded-full"
                }`}
              >
                <PencilLine
                  onClick={() => setUpdateTimer(!updateTimer)}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <div>
              {/* Time inputs */}
              <div className="flex gap-4">
                {/* From Time */}

                <div className="w-full">
                  <p>From</p>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md px-4 py-2 w-full">
                    <FiClock
                      onClick={openTimePicker1}
                      className="text-gray-500"
                    />
                    <input
                      type="time"
                      disabled={updateTimer ? true : false}
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                      className="bg-transparent outline-none w-full"
                      ref={timeRef1}
                    />
                  </div>
                </div>

                {/* To Time */}
                <div className="w-full">
                  <p>To</p>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md w-full">
                    <div className="flex  items-center gap-2 bg-gray-100 rounded-md px-4 py-2 w-full">
                      <FiClock
                        onClick={openTimePicker2}
                        className="text-gray-500"
                      />
                      <input
                        type="time"
                        value={toTime}
                        disabled={updateTimer ? true : false}
                        onChange={(e) => setToTime(e.target.value)}
                        className="bg-transparent outline-none w-full"
                        ref={timeRef2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                {/* <PrimaryButton  !w-fit" btnText="Update" /> */}
              </div>
            </div>
          </div>
          {/* Availability Card */}

          <h2 className="!text-[32px] mb-[60px] font-medium">Lydia Press</h2>

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

          <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-[60px] !gap-5">
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

          <div className=" p-4 overflow-x-auto">
            <div className="grid grid-cols-4 gap-[30px]">
              <div className="lg:col-span-1 col-span-4 h-[370px] sm:col-span-4 bg-[#fff]  relative rounded-[20px] flex flex-col justify-start items-center">
                <div className=" absolute top-10  text-center ">
                  <p className="text-[14px] font-normal w-[100%] ">Show Rate</p>
                  <p className="text-[22px] font-medium w-[100%] ">$25K</p>
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
                    <span className="text-gray-900 text-[14px]">
                      In Process
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 col-span-4 sm:col-span-4 w-full bg-white rounded-[12px] px-[40px] flex flex-col justify-center">
                <div className="flex justify-between items-center py-[24px] border-b border-[#b0adad3d]">
                  <p className="font-medium">Highest Amount Earned</p>
                  <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">
                    $4.5K
                  </p>
                </div>
                <div className="flex justify-between items-center pt-[24px] pb-[24px] border-b border-[#b0adad3d]">
                  <p className="font-medium">Satisfaction Rate</p>
                  <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">
                    97%
                  </p>
                </div>
                <div className="flex justify-between items-center pt-[24px] pb-[24px] border-b border-[#b0adad3d]">
                  <p className="font-medium">Total Revenue Generated</p>
                  <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">
                    $25K
                  </p>
                </div>
                <div className="flex justify-between items-center pt-[24px] pb-[24px]  border-b border-[#b0adad3d]">
                  <p className="font-medium">Recurring Customers</p>
                  <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] w-[141px] text-center rounded-[8px]">
                    45%
                  </p>
                </div>
                <div className="flex justify-between items-center pt-[24px] mb-[44px] ">
                  <p className="font-medium">Most Selling Area</p>
                  <p className="text-[15px] font-semibold text-gray-800 bg-[#e6fbfb5b] py-[6px] px-[38px] rounded-[8px]">
                    Baltimore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddCustomerFranchise;
