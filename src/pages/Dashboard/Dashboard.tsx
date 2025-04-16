import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import exportIcon from "@assets/svgs/export-icon.svg";
import React from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg"
import cardImg2 from "@assets/svgs/coverview-card2-img.svg"
import cardImg3 from "@assets/svgs/coverview-card3-img.svg"
import cardImg4 from "@assets/svgs/coverview-card4-img.svg"

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
              <div>
                <h3>Quick Overview</h3>
                <p className="default_para">Summary</p>
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
          <div className="recent_activites lg:col-span-1 common_section_bg py-4 px-2">
            Recent activites
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="ranking_franchise common_section_bg py-4 px-2">
            Ranking Franchise
          </div>
          <div className="insights common_section_bg py-4 px-2">Insights</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
