import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React, { useState } from "react";
import OverviewCards from "./Components/OverviewCards";
import ActiveDetailers from "./Components/ActiveDetailers";
import RankingFrenchise from "./Components/RankingFrenchise";
import Insight from "./Components/Insight";

const FranchiseDashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-[40px] uber-move">
        <div className="w-full md:flex-row flex-col flex md:items-center  justify-between mb-7 md:w-full">
          <h2 className="mb-4 uber-move !text-[20px] md:!text-[32px]">
            Welcome back. Jane! 👋
          </h2>

          <div className=" flex gap-[20px]">
            <div className="md:w-[366px]">
              <CommonInput placeholder="Search" showImg={true} />
            </div>
            <div>
              <PrimaryButton
                btnText="Add a user"
                btnClass="text-white text-[16px] !rounded-[12px] !font-medium bg-[#003CA6] px-4 py-[12px] px-[36px] "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
          <div className="overview_section col-span-1 lg:col-span-2 sm:col-span-1 common_section_bg py-[18px] ps-[25px] pe-[25px]">
            <div className="flex items-start justify-between">
              <div className="mb-[43px]">
                <h3 className="mb-2 !text-[25px]">Today's Booking & Revenue</h3>
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
            <OverviewCards />
          </div>

          <ActiveDetailers />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <RankingFrenchise />
          </div>

          <div>
            <Insight />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FranchiseDashboard;
