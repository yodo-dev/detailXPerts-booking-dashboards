import React from "react";
import { CommonInputsProps } from "./types/index";
import searchIcon from "@assets/svgs/search-normal.svg";

const CommonInput: React.FC<CommonInputsProps> = ({
  showImg,
  inputClass,
  placeholder,
}) => {
  return (
    // max-w-[366px]
    <div className="relative  w-full">
      {showImg && (
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 size-5"
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full rounded-xl bg-white placeholder:text-[12px] shadow_bg placeholder:text-[var(--text-muted)] py-[14px] outline-none ${
          showImg ? "pl-10" : "pl-3"
        } pr-3 ${inputClass} text-[14px]`}
      />
    </div>
  );
};

export default CommonInput;
