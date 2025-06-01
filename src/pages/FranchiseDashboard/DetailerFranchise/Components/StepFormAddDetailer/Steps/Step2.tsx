import SelectField from "@components/SelectField/SelectField";
import { AvailabilityTime } from "@pages/FranchiseDashboard/CustomersFranchise/Components/AvailabilityCard";
import React from "react";

const Step2 = () => {
  const dataArr = [
    {
      label: "Willington block",
    },
  ];

  return (
    <div>
      <div className="w-full  ">
        <SelectField
          label="Select Service Area"
          options={dataArr}
          styleSelect="select-style w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3"
          // imageSrc={ArrowDown}
        />
        <div className="mt-10">
          <AvailabilityTime notArrowImg={true} dayName={"Monday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Tuesday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Wednesday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Thursday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Friday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Satuday"} />
          <AvailabilityTime notArrowImg={true} dayName={"Sunday"} />
        </div>

        {/* <img src={mapImg} alt="" className="mt-5 w-full" /> */}
      </div>
    </div>
  );
};

export default Step2;
