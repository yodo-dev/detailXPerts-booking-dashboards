import React from "react";
import Linechart from "@components/Charts/Linechart";

export default function Insight() {
  const data = [
    { name: "Jan", "Returning Customers": 320, "New Customers": 270 },
    { name: "Feb", "Returning Customers": 300, "New Customers": 230 },
    { name: "Mar", "Returning Customers": 260, "New Customers": 190 },
    { name: "Apr", "Returning Customers": 220, "New Customers": 160 },
    { name: "May", "Returning Customers": 260, "New Customers": 240 },
    { name: "Jun", "Returning Customers": 310, "New Customers": 330 },
    { name: "Jul", "Returning Customers": 300, "New Customers": 360 }, // highlight this
    { name: "Aug", "Returning Customers": 250, "New Customers": 310 },
    { name: "Sep", "Returning Customers": 200, "New Customers": 260 },
    { name: "Oct", "Returning Customers": 150, "New Customers": 190 },
    { name: "Nov", "Returning Customers": 180, "New Customers": 150 },
    { name: "Dec", "Returning Customers": 220, "New Customers": 180 },
  ];

  return (
    <div className="insights common_section_bg py-4 px-3 sm:px-4 md:px-6 md:py-7">
      <h2 className="!text-[20px] text-[#252525] !font-bold mb-10">
        Insights
      </h2>
      <Linechart
        data={data}
        legend={true}
        color1="#A700FF" // Purple
        color2="#FF2D55" // Red
      />
    </div>
  );
}
