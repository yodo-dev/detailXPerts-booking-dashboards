import React from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import orderIcon from "@assets/svgs/Order Icon.svg";
import userStart from "@assets/svgs/userStart.svg";
import friendReqs from "@assets/svgs/friendReqs.svg";

function OverviewCards() {
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <OverviewCard
        index={0}
        img={cardImg1}
        title="Total Sales"
        averageIncrese="+8%"
        averageTitle="from last month"
        monthlyRevenue="$1k"
        cardClass="bg-[#FFE2E5]"
        imgClass="bg-[#FA5A7D]"
      />
      <OverviewCard
        index={1}
        img={orderIcon}
        title="Total Bookings"
        averageIncrese="+5%"
        averageTitle="from last month"
        monthlyRevenue="300"
        cardClass="bg-[#FFF4DE]"
        imgClass="bg-[#FF947A]"

      />
      <OverviewCard
        index={2}
        img={userStart}
        title="Active Detailers"
        averageIncrese="+1 .2%"
        averageTitle="from last month"
        monthlyRevenue="25"
        cardClass="bg-[#dcecf7]"
        imgClass="bg-[#3cd856]"


      />
      <OverviewCard
        index={3}
        img={friendReqs}
        title="New Customers"
        averageIncrese="0,5%"
        averageTitle="from last month"
        monthlyRevenue="8"
        cardClass="bg-[#f3e8ff]"
        imgClass="bg-[#bf83ff]"


      />
    </div>
  );
}

export default OverviewCards;
