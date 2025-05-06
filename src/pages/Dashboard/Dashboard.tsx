import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React, { useState } from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import Linechart from "@components/Charts/Linechart";

import { ReactSVG } from "react-svg";
import girlPic from "../../assets/svgs/girlPic.svg";
import messageIcon from "../../assets/svgs/message-text.svg";
import DashboardTable from "./Components/DashboardTable";
import orderIcon from "@assets/svgs/Order Icon.svg";
import userStart from "@assets/svgs/userStart.svg";
import friendReqs from "@assets/svgs/friendReqs.svg";

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(0);
  const [people, setPeople] = useState(["_", "_", "_", "_", "_"]);

  const tableHeaders = [
    {
      key: "index",
      label: "#",
      align: "start",
      customClass: "font-medium flex items-center gap-2",
    },
    {
      key: "name",
      label: "Name",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
    {
      key: "progress",
      label: "Progress",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
    {
      key: "booking",
      label: "Booking",
      align: "center",
      customClass:
        "text-[16px] font-semibold text-[#252525] justify-center flex items-center gap-2",
    },
  ];

  const tableHeaders2 = [
    {
      key: "time",
      label: "Time",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
    {
      key: "activity",
      label: "Activity",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
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
      <div className="default_container">
        <div className="w-full md:flex-row flex-col flex md:items-center  justify-between mb-7 md:w-full">
          <h2 className="mb-4 !text-[20px] md:!text-[32px]">
            Welcome back. Jane! 👋
          </h2>

          <div className="md:w-[366px]">
            <CommonInput placeholder="Search" showImg={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
          <div className="overview_section col-span-1 lg:col-span-2 sm:col-span-1 common_section_bg py-[18px] ps-[25px] pe-[25px] pb-8 p-0">
            <div className="flex items-start justify-between">
              <div className="mb-[43px]">
                <h3 className="mb-2 !text-[25px]">Quick Overview</h3>
                <p className="default_para !text-[16px] !font-normal">
                  Summary
                </p>
              </div>
              <div>
                <PrimaryButton
                  btnText="Export"
                  img={exportIcon}
                  showImg={true}
                  imgClass="size-4"
                  btnClass="border !font-medium border-[var(--border-cyan)] px-4 py-2"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
              <OverviewCard
                index={0}
                img={cardImg1}
                title="Monthly Revenue"
                averageIncrese="+8%"
                averageTitle="from last month"
                monthlyRevenue="$1k"
              />
              {/* <OverviewCard
                index={1}
                img={orderIcon}
                title="All Franchises"
                averageIncrese="+3"
                averageTitle="from last month"
                monthlyRevenue="300"
              /> */}
              <OverviewCard
                index={2}
                img={userStart}
                title="Total Customers"
                averageIncrese="+8.2%"
                averageTitle="from last month"
                monthlyRevenue="25"
              />
              <OverviewCard
                index={3}
                img={friendReqs}
                title="Total Detailers"
                averageIncrese="+8"
                averageTitle="from last month"
                monthlyRevenue="8"
              />
            </div>
          </div>

          <div className="recent_activites col-span-1 lg:col-span-1 common_section_bg  p-[20px]">
            <p className="!text-[20px] font-semibold mt-[13px]">
              {role == 1 ? "Recent activites" : "Active Detailers"}{" "}
            </p>

            {role == 1 ? (
              <div className="overflow-x-auto w-full ">
                <DashboardTable tableHeaders={tableHeaders2} />
              </div>
            ) : (
              <div>
                {people.map(() => (
                  <div className=" flex justify-between items-center">
                    <div className="w-[100%] mt-5 flex justify-start gap-3">
                      <img
                        className="object-fit w-[40px] h-[40px]"
                        src={girlPic}
                        alt=""
                      />
                      <div>
                        <p className="text-[16px] text-medium">
                          Justin Baptista
                        </p>
                        <p className="text-[#25252580] text-[14px] font-normal">
                          hello@hourglassinc.com
                        </p>
                      </div>
                    </div>
                    <ReactSVG src={messageIcon} className="cursor-pointer" />

                    {/* 2nd msg */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <div className="ranking_franchise common_section_bg  py-6 px-6 ps-0 overflow-x-auto w-full ">
              <div className="flex justify-between items-center">
                <p className="text-[20px] px-6 text-[#252525] !font-semibold">
                  {role==1 ? "Ranking Franchises " : "Ranking of most booked service"}
                </p>
                <p className="text-[#003CA6] text-[18px] !font-semibold underline pe-0 lg:pe-7">
                  View all
                </p>
              </div>
              <DashboardTable topTable={true} tableHeaders={tableHeaders} />
            </div>
          </div>

          <div className="insights common_section_bg py-4 px-3 sm:px-4 md:px-6 md:py-7">
            <h2 className="!text-[20px] text-[#252525] !font-semibold mb-10">
              Insights
            </h2>
            <Linechart
              data={data}
              legend={true}
              color1={"#3CD856"}
              color2={"#A700FF"}
              color3={"#EF4444"}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
