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

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(1);
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

  return (
    <MainLayout>
      <div className="default_container">
        <div className="!w-full md:flex-row flex-col flex md:items-center  justify-between mb-7 md:w-full">
          {/* <h2 className="mb-4 md:text-[18px]">Welcome back. Jane! 👋</h2> */}
          <h2 className="mb-4 text-[20px] md:text-[16px]">
            Welcome back. Jane! 👋
          </h2>
          {/* <h2 className="mb-4 md:!text-[16px]">
            Welcome back. Jane! 👋
          </h2> */}

          <CommonInput placeholder="Search" showImg={true} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
          <div className="overview_section col-span-1 lg:col-span-2 sm:col-span-1 common_section_bg py-[40px]  p-0">
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
              <OverviewCard
                index={1}
                img={cardImg1}
                title="Total Franchises"
                averageIncrese="+3"
                averageTitle="from last month"
                monthlyRevenue="300"
              />
              <OverviewCard
                index={2}
                img={cardImg1}
                title="Total Customers"
                averageIncrese="+8.2%"
                averageTitle="from last month"
                monthlyRevenue="25"
              />
              <OverviewCard
                index={3}
                img={cardImg1}
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
            <div className="flex justify-between items-center">
              <p className="text-[20px] px-6 text-[#252525] !font-semibold">
                Ranking Franchises
              </p>
              <p className="text-[#003CA6] text-[18px] !font-semibold underline">
                View all
              </p>
            </div>
            <div className="ranking_franchise common_section_bg  py-4 px-6 overflow-x-auto w-full ">
              <DashboardTable topTable={true} tableHeaders={tableHeaders} />
            </div>
          </div>

          <div className="insights common_section_bg py-4 px-3 sm:px-4 md:px-6 md:py-7">
            <h2 className="!text-[20px] text-[#252525] !font-semibold mb-10">
              Insights
            </h2>
            <Linechart data={data} legend={true} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
