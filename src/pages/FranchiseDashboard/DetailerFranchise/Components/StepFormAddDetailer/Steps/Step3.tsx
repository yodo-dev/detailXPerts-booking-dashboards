import SelectField from "@components/SelectField/SelectField";
import { AvailabilityTime } from "@pages/FranchiseDashboard/CustomersFranchise/Components/AvailabilityCard";
import React from "react";
import { ReactSVG } from "react-svg";
import uploadServer from "../../../../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../../../../assets/svgs/userIcon.svg";
const Step3 = () => {
  const dataArr = [
    {
      label: "Willington block",
    },
  ];

  return (
    <div className="flex justify-between">
      <ReactSVG src={userIcon} />
      <div className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 text-center mb-6 w-[80%]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
          <span className="text-2xl text-gray-500">
            <ReactSVG src={uploadServer} />
          </span>
        </div>
        <p className="text-sm text-[#5B5B5B]">
          <strong className="text-black">Click to upload</strong> or drag and
          drop
        </p>
        <p className="text-[12px] text-[#5B5B5B] mt-1">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
    </div>
  );
};

export default Step3;
