import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import Linechart from "./Components/Linechart";
import cardImg2 from "@assets/svgs/coverview-card2-img.svg";
import cardImg3 from "@assets/svgs/coverview-card3-img.svg";
import cardImg4 from "@assets/svgs/coverview-card4-img.svg";

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="default_container">
        <div className="flex items-center justify-between mb-7">
          <h2>Welcome back. Jane! 👋</h2>
          <CommonInput placeholder="Search" showImg={true} />
        </div>
        <div className="grid lg:grid-cols-3 gap-3 mb-5">
          <div className="overview_section lg:col-span-2 common_section_bg py-6 px-6">
            <div className="flex items-start justify-between">
              <div className="mb-[43px]">
                <h3 className="mb-2">Quick Overview</h3>
                <p className="default_para text-[16px] font-normal">Summary</p>
              </div>
              <div>
                <PrimaryButton
                  btnText="Export"
                  img={exportIcon}
                  showImg={true}
                  imgClass="size-4"
                  btnClass="border border-[var(--border-cyan)] px-4 py-2"
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
            <p className="text-[18px] font-bold">Recent activites</p>
            <table className="min-w-full rounded-lg border-separate border-spacing-0 mt-[20px]">
              <thead className=" text-black rounded-t-lg">
                <tr>
                  <th className="font-bold px-6 py-3 text-start flex items-center gap-2 text-sm font-normal">
                    Time{" "}
                    {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                  </th>

                  <th className="text-start px-6 py-3text-sm font-normal ">
                    <span className="flex font-bold items-center gap-2">
                      Activity{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-start border border-b-[#f5f8ff] hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-4 text-sm text-center font-medium">
                    Franchise “EcoWash” added...
                  </td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-5 text-sm text-center font-medium">
                    Franchise “EcoWash” added...
                  </td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-5 text-sm text-center font-medium">
                    Franchise “EcoWash” added...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="ranking_franchise common_section_bg py-4 px-5">
            <div className="flex justify-between">
              <p className="text-[18px] font-bold">Recent Franchises</p>
              <p className="text-[#003CA6] text-[14px] font-bold underline">
                View all
              </p>
            </div>
            <table className="min-w-full rounded-lg border-separate border-spacing-0 mt-[20px]">
              <thead className=" text-black rounded-t-lg">
                <tr>
                  <th className="px-6 py-3 text-start flex items-center gap-2 text-sm font-normal">
                    #{" "}
                    {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                  </th>

                  <th className="text-start px-6 py-3 text-sm font-bold ">
                    <span className="flex items-center gap-2">
                      Name{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>

                  <th className="text-start px-6 py-3 text-sm font-bold ">
                    <span className="flex items-center gap-2">
                      Progress{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>

                  <th className="text-start px-6 py-3 text-sm font-bold ">
                    <span className="flex items-center gap-2">
                      Booking{" "}
                      {/* <ReactSVG className="cursor-pointer" src={ArrowUpDown} /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-start border border-b-[#f5f8ff] hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">0</td>

                  <td className="px-6 py-4 text-sm text-start font-medium">
                    Franchise “EcoWash” added...
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">0</td>

                  <td className="px-6 py-5 text-sm text-start font-medium">
                    Franchise “EcoWash” added...
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>
                </tr>

                <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
                  <td className="px-6 py-5 text-sm text-gray-700">0</td>

                  <td className="px-6 py-5 text-sm text-start font-medium">
                    Franchise “EcoWash” added...
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>

                  <td className="px-6 py-5 text-sm text-gray-700">12:45 Am</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="insights common_section_bg py-4 px-5">
            <h2 className="!text-[22px] !font-bold">Insights</h2>

            <Linechart />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
