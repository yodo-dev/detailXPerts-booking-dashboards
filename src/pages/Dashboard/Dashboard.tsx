import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React, { useRef, useState } from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import Linechart from "@components/Charts/Linechart";
import Dollar from "@assets/svgs/Frame 2147225855.svg";
import { ReactSVG } from "react-svg";
import girlPic from "../../assets/svgs/girlPic.svg";
import messageIcon from "../../assets/svgs/message-text.svg";
import DashboardTable from "./Components/DashboardTable";
import orderIcon from "@assets/svgs/Order Icon.svg";
import userStart from "@assets/svgs/userStart.svg";
import friendReqs from "@assets/svgs/friendReqs.svg";

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(1);
  const [people, setPeople] = useState(["_", "_", "_", "_", "_"]);
  const [cards, setCards] = useState(["_", "_", "_", "_"]);

  const bookings = [
    {
      name: "Jacob Jones",
      date: "10-01-2025",
      price: "$90",
      status: "Ongoing",
      img: "https://i.pravatar.cc/32?img=1",
      role: "Customer",
    },
    {
      name: "Jerome Bell",
      date: "10-01-2025",
      price: "$90",
      status: "Completed",
      img: "https://i.pravatar.cc/32?img=2",
    },
    {
      name: "Theresa Webb",
      date: "10-01-2025",
      price: "$90",
      status: "Ongoing",
      img: "https://i.pravatar.cc/32?img=3",
    },
    {
      name: "Kristin Watson",
      date: "10-01-2025",
      price: "$90",
      status: "Completed",
      img: "https://i.pravatar.cc/32?img=4",
    },
  ];

  const reviews = [
    {
      name: "Jacob Jones",
      status: "Excellent",
      rating: "4.5",
      img: "https://i.pravatar.cc/32?img=1",
      role: "Customer",
    },
    {
      name: "Jerome Bell",
      status: "Good",
      rating: "4.9",
      img: "https://i.pravatar.cc/32?img=2",
    },
    {
      name: "Theresa Webb",
      status: "Poor",
      rating: "2.6",
      img: "https://i.pravatar.cc/32?img=3",
    },
    {
      name: "Kristin Watson",
      status: "Excellent",
      rating: "4.1",
      img: "https://i.pravatar.cc/32?img=4",
    },
  ];

  const statusColor = {
    Ongoing: "bg-green-100 text-green-600",
    Completed: "bg-blue-100 text-blue-600",
    Excellent: "bg-green-100 text-green-600",
    Good: "bg-yellow-100 text-yellow-600",
    Poor: "bg-red-100 text-red-600",
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const username = userInfo?.user?.first_name || "";

  return (
    <MainLayout>
      <div className="default_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          <div className="overview_section col-span-1 lg:col-span-2 sm:col-span-1  py-[18px] ps-[25px] pe-[25px] p-0">
            <div className="w-full md:flex-row flex-col mb-[20px] rounded-[10px] flex md:items-center bg-white py-[23px] px-[20px] justify-between md:w-full">
              <div>
                <h2 className="mb-4 !text-[20px] !font-medium md:!text-[32px]">
                  Welcome back. {username}! 👋
                </h2>
                <p className="text-[18px] leading-3 font-normal">
                  Your AI insights of expense tracking and reports
                </p>
              </div>

              <div className="md:w-[366px]">
                <CommonInput
                  placeholder="Search"
                  inputClass="border-[#E1E3F6] border-[1px]"
                  showImg={true}
                />
              </div>
            </div>
            <div className="flex items-start  justify-between">
              <div className="mb-[20px]">
                <h3 className="!text-[25px]">Summary Overview</h3>
              </div>
            </div>

            <div
              className={`grid ${
                role == 1 ? "lg:grid-cols-4" : "lg:grid-cols-4"
              }  gap-4 md:grid-cols-1 sm:grid-cols-1`}
            >
              {cards?.map(() => (
                <OverviewCard
                  index={0}
                  img={Dollar}
                  // title="Monthly Revenue"
                  title="Today Revenue"
                  averageIncrese="Currently live on the app"
                  monthlyRevenue="$1k"
                  renderMainValueNumber="+0.3%"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-3  gap-6">
            <div className="bg-white rounded-xl col-span-2 shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="!text-[20px] !font-bold">Booking</h2>
                <a
                  href="#"
                  className="text-[18px] font-semibold text-[#252525] cursor-pointer"
                >
                  View all
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="py-[18px] px-[10px]">Service Details</th>
                      <th className="py-2 px-3">Customer</th>
                      <th className="py-2 px-3">Service Date</th>
                      <th className="py-2 px-3">Price</th>
                      <th className="py-2 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((item, i) => (
                      <tr key={i} className="">
                        <td className="py-2 px-3">Organic Detailing Package</td>
                        <td className="py-[17px] px-[10px] flex items-center gap-2">
                          <img
                            src={item.img}
                            className="w-6 h-6 rounded-full"
                            alt=""
                          />
                          <div>
                            {item.name}
                            {item.role}
                          </div>
                        </td>
                        <td className="py-2 px-3">{item.date}</td>
                        <td className="py-2 px-3">{item.price}</td>
                        <td className="py-2 px-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              statusColor[item.status]
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl col-span-1 shadow p-4">
              <h2 className="!text-[20px] !font-extrabold mb-4">
                Customer Reviews
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="py-2 px-3">Offer Name</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Rating</th>
                      <th className="py-2 px-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-2 px-3 flex items-center gap-2">
                          <img
                            src={item.img}
                            className="w-6 h-6 rounded-full"
                            alt=""
                          />
                          {item.name}
                        </td>
                        <td className="py-2 px-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              statusColor[item.status]
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-2 px-3">{item.rating}</td>
                        <td className="py-2 px-3">...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
