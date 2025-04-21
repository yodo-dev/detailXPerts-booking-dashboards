import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React, { useState } from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import Linechart from "./Components/Linechart";
import greenBorder from "../../assets/svgs/Border.svg";
import redBorder from "../../assets/svgs/redBorder.svg";
import { ReactSVG } from "react-svg";
import girlPic from "../../assets/svgs/girlPic.svg";
import messageIcon from "../../assets/svgs/message-text.svg";

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(0);
  const [people, setPeople] = useState(["_", "_", "_", "_", "_"]);

  return (
    <MainLayout>
      <div className="default_container">
        <div className="flex items-center justify-between mb-7">
          <h2 className="!text-[40px]">Welcome back. Jane! 👋</h2>
          <CommonInput placeholder="Search" showImg={true} />
        </div>
        <div className="grid lg:grid-cols-3 gap-3 mb-6">
          <div className="overview_section lg:col-span-2 common_section_bg py-[40px] px-[40px]">
            <div className="flex items-start justify-between">
              <div className="mb-[43px]">
                <h3 className="mb-2 !text-[25px]">Quick Overview</h3>
                <p className="default_para !text-[18px] !font-medium">
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
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-2">
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
          <div className="recent_activites lg:col-span-1 common_section_bg  p-[20px]">
            <p className="!text-[20px] font-semibold mt-[13px]">
              {role == 1 ? "Recent activites" : "Active Detailers"}{" "}
            </p>

            {role == 1 ? (
              <table className="min-w-full rounded-lg border-separate border-spacing-0 mt-[20px]">
                <thead className=" text-black rounded-t-lg">
                  <tr>
                    <th className="!font-semibold px-6 py-3 text-start flex items-center gap-2 !text-[16px] font-normal">
                      Time{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </th>

                    <th className="text-start px-6 py-3text-sm font-normal ">
                      <span className="flex font-bold items-center !text-[16px] !font-semibold gap-2">
                        Activity{" "}
                        {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-start border border-b-[#f5f8ff] hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                    <td className="px-6 py-5 text-sm text-[#898989]">
                      <span className="flex justify-center items-center gap-3">
                        {" "}
                        12:45 Am <ReactSVG src={greenBorder} />
                      </span>{" "}
                    </td>

                    <td className="px-6 py-4 text-sm text-center font-medium">
                      Franchise “EcoWash” added...
                    </td>
                  </tr>

                  <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                    <td className="px-6 py-5 text-sm text-[#898989]">
                      <span className="flex justify-center items-center gap-3">
                        {" "}
                        12:45 Am <ReactSVG src={redBorder} />
                      </span>{" "}
                    </td>

                    <td className="px-6 py-5 text-sm text-center font-medium">
                      Franchise “EcoWash” added...
                    </td>
                  </tr>

                  <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                    <td className="px-6 py-5 text-sm text-[#898989]">
                      <span className="flex justify-center items-center gap-3">
                        {" "}
                        12:45 Am <ReactSVG src={greenBorder} />
                      </span>{" "}
                    </td>

                    <td className="px-6 py-5 text-sm text-center font-medium">
                      Franchise “EcoWash” added...
                    </td>
                  </tr>
                </tbody>
              </table>
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
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="ranking_franchise common_section_bg  py-4 px-6">
            <div className="flex justify-between items-center">
              <p className="text-[25px] px-6 text-[#252525] !font-semibold">
                Ranking Franchises
              </p>
              <p className="text-[#003CA6] text-[18px] !font-semibold underline">
                View all
              </p>
            </div>
            <table className="min-w-full rounded-lg border-separate border-spacing-0 mt-[20px]">
              <thead className=" text-black rounded-t-lg">
                <tr>
                  <th className="px-6 py-3 !font-medium text-start flex items-center gap-2 text-sm font-normal">
                    #{" "}
                    {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                  </th>

                  <th className="text-start px-6 py-3 text-sm font-bold ">
                    <span className="flex !text-[16px] !font-semibold text-[#252525] items-center gap-2">
                      Name{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>

                  <th className="text-start px-6 py-3 text-sm font-bold ">
                    <span className="flex !text-[16px] !font-semibold text-[#252525] items-center gap-2">
                      Progress{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>

                  <th className="text-center px-6 py-3 pe-0 text-sm font-bold ">
                    <span className="flex !text-[16px] justify-center !font-semibold text-[#252525] items-center gap-2">
                      Booking{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-start border hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm !font-medium text-gray-700">
                    0
                  </td>

                  <td className="px-6 py-4 !text-[14px] text-[#252525] text-start font-medium">
                    AutoWash
                  </td>

                  <td className="px-6 py-5 !text-[16px] text-[#252525]">
                    12:45 Am
                  </td>

                  <td className="px-6 py-5 !text-[16px]  text-[#252525] text-center pe-0">
                    <span className="border !text-center border-[#0095FF] text-[#0095FF] font-normal text-[13px] pt-[2px] pb-[2px] ps-[13px] pe-[13px] rounded-lg ">
                      132
                    </span>
                  </td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm !font-medium text-gray-700">
                    0
                  </td>

                  <td className="px-6 py-5 !text-[14px] text-[#252525] text-start font-medium">
                    AutoWash
                  </td>

                  <td className="px-6 py-5 !text-[16px] text-[#252525] text-gray-700">
                    12:45 Am
                  </td>

                  <td className="px-6 py-5 !text-[16px]  text-[#252525] text-center pe-0">
                    <span className="border !text-center border-[#00E58F] text-[#00E58F] font-normal text-[13px] pt-[2px] pb-[2px] ps-[13px] pe-[13px] rounded-lg ">
                      132
                    </span>
                  </td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm !font-medium text-gray-700">
                    0
                  </td>

                  <td className="px-6 py-5 !text-[14px] text-[#252525] text-start font-medium">
                    AutoWash
                  </td>

                  <td className="px-6 py-5 !text-[16px] text-[#252525] text-gray-700">
                    12:45 Am
                  </td>

                  <td className="px-6 py-5 !text-[16px]  text-[#252525] text-center pe-0">
                    <span className="border !text-center border-[#884DFF] text-[#884DFF] font-normal text-[13px] pt-[2px] pb-[2px] ps-[13px] pe-[13px] rounded-lg ">
                      132
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="insights common_section_bg py-7 px-6">
            <h2 className="!text-[25px] text-[#252525] !font-semibold">
              Insights
            </h2>

            <Linechart />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
