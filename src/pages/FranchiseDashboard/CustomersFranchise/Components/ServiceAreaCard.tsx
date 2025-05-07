import React from "react";
import mapImg from "../../../../assets/images/map.png";

const ServiceArea: React.FC=()=>{
  return (
    <div className="  border-[1px] border-[#e6e6e6] p-[26px] rounded-2xl mb-5">
      <div className=" flex  justify-between items-center mb-[20px]">
        <h4 className="text-black">Service Area</h4>
      </div>
      <div className="w-full  ">
        <label className="block text-sm text-gray-700 mb-1">
          Select Service Area
        </label>
        <select
          className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3"
          defaultValue="willington"
        >
          <option value="willington">Willington block</option>
          <option value="another">Another block</option>
          <option value="example">Example block</option>
        </select>

        <img src={mapImg} alt="" className="mt-5 w-full" />
      </div>
      <div>
        {/* Time inputs */}

        <div className=" flex justify-end">
          {/* <PrimaryButton  !w-fit" btnText="Update" /> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
