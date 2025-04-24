import React from "react";
import ExportBtn from "../../../../assets/svgs/export.svg"

const DownloadButton = ({ text }) => {
    return (
      <button
        className="flex items-center justify-center !font-semibold !text-[14px] gap-2 px-5 py-3 bg-[#003CA6] cursor-pointer text-white rounded-[8px] text-base font-medium transition"
      >
        <img src={ExportBtn} alt="" />
        {text}
      </button>
    );
  };
  
  export default DownloadButton;
  