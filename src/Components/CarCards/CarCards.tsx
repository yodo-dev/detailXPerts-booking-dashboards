import React from "react";
import { ReactSVG } from "react-svg";
import VehicleCar from "../../assets/svgs/honda civic car.svg";
import CallIcon from "@assets/svgs/call.svg";
import MessageIcon from "@assets/svgs/message-text.svg";
import greenCircle from "../../assets/svgs/Ellipse 45.svg"
import Location from "../../assets/svgs/location1.svg"

import ReactSwitch from "react-switch";
type VehicleCardProps = {
  vehicleName: string;
  vehicleYear: number;
  vehicleImage: string;
  fromLocation: {
    title: string;
    address: string;
  };
  toLocation: {
    title: string;
    address: string;
  };
  customer: {
    name: string;
    company: string;
    avatar: string;
  };
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicleName,
  vehicleYear,
  vehicleImage,
  fromLocation,
  toLocation,
  customer,
}) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl border border-[#003CA6] border-[2px] shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">Vehicle Details</p>
          <h2 className="!text-[18px] !font-bold mt-[10px]">{vehicleName}</h2>
          <p className="text-gray-500 font-normal text-[14px] mt-[10px]">
            {vehicleYear}
          </p>
        </div>
        {/* <img src={vehicleImage} alt={vehicleName} className="w-24 h-auto" /> */}
        <ReactSVG src={VehicleCar} />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-[#E8F9EE] relative w-[38px] h-[38px] rounded-full mt-1.5"><img src={greenCircle} alt="" className="absolute top-3 left-3" /></div>
          <div>
            <p className="font-semibold text-gray-800">{fromLocation.title}</p>
            <p className="text-sm text-[#B0B0B0]">{fromLocation.address}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 relative">
          <div className="w-[38px] h-[38px] relative bg-[#E5E5FE] rounded-full mt-1.5"> <img src={Location} alt="" className="absolute top-[9px] left-[11px] w-[17px] h-[20px]" /> </div>
          <div>
            <p className="font-semibold text-gray-800">{toLocation.title}</p>
            <p className="text-sm text-[#B0B0B0]">{toLocation.address}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-400 text-sm">Customer</p>
            <p className="font-semibold">{customer.name}</p>
            <p className="text-sm text-gray-500">{customer.company}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#F7F5FF] cursor-pointer p-2 rounded-xl  hover:bg-blue-200">
            <ReactSVG src={CallIcon} />
          </button>
          <button className="bg-[#F7F5FF] p-2 rounded-xl cursor-pointer  hover:bg-blue-200 relative">
            <ReactSVG src={MessageIcon} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
