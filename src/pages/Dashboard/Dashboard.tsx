import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import DataTable from "react-data-table-component";
import React, { useRef, useState } from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";

import Dollar from "@assets/svgs/Frame 2147225855.svg";

import DashboardBookingTable from "./Components/DashboardBookingTable";
import DashboardCustomerReviewsTable from "./Components/DashboardCustomerReviewsTable";
import DashboardMostBookingTable from "./Components/DashboardMostBookingTable";
import DashboardPopularBookingSection from "./Components/DashboardPopularBookingSection";

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(1);
  const [cards, setCards] = useState(["_", "_", "_", "_"]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const username = userInfo?.user?.first_name || "";

  return (
    <MainLayout>
      <div className="default_container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          <div className="overview_section  col-span-1 lg:col-span-2 sm:col-span-1 p-0">
            <div className="w-full basic-shadow lg:flex-row flex-col mb-[20px] rounded-[10px] flex lg:items-center bg-white pt-[13px] pb-[25px] px-[20px] justify-between md:w-full">
              <div className="mb-8 lg:mb-0">
                <p className="mb-4 font-medium md:text-[26px]">
                  Welcome back. {username}! 👋
                </p>
                <p className="text-[14px] md:text-[18px] leading-3 font-normal text-[#252525]">
                  Your AI insights of expense tracking and reports
                </p>
              </div>

              <div className="md:w-[366px]">
                <CommonInput
                  placeholder="Search"
                  inputClass="border-[#E1E3F6] border-[1px] font-medium"
                  showImg={true}
                />
              </div>
            </div>
            <div className="flex items-start  justify-between">
              <div className="mb-[20px]">
                <h3 className="!text-[23px]">Summary Overview</h3>
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

        <div className=" mb-[20px]">
          <div className="grid grid-cols-5  gap-5">
            <div className="col-span-5 lg:col-span-3">
              <DashboardBookingTable />
            </div>

            <div className="col-span-5 lg:col-span-2">
              <DashboardCustomerReviewsTable />
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-5 gap-5">
            {/* Most Booked Services */}
            <div className="col-span-5 lg:col-span-3">
              <DashboardMostBookingTable />
            </div>
            {/* Popular Booking Locations */}
            <div className="col-span-5 lg:col-span-2">
              <DashboardPopularBookingSection />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
