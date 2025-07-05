import MainLayout from "@layouts/MainLayout";
import React from "react";
import FranchiseInfoCard from "./FranchiseInfoCard";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ArrowLeftFull from "@assets/svgs/arrowLeftFull.svg";
import { ReactSVG } from "react-svg";
import serachIcon from "@assets/svgs/search-normal.svg";
import CommonInput from "@components/inputs/CommonInput";
function FranciseManagementDetail() {
  return (
    <MainLayout>
      <div className="md:ps-[40px] md:pe-[40px] ps-[10px] pe-[10px]">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="md:col-span-2 col-span-1  mb:0 mb-5">
            <div className="flex gap-2 items-center sm:mb-0 mb-4">
              <Link to={"/frenchise-management"}>
                <ReactSVG src={ArrowLeftFull} />
              </Link>
              <h2 className="!text-black md:!text-[32px] !text-[22px] ">
                Velocita Motors Detailers
              </h2>
            </div>
          </div>
          <div className="md:col-span-1 col-span-1">
            <div className="flex justify-end">
              <CommonInput
                placeholder="filter by franchise, rating, location"
                inputClass="border-[#E1E3F6] border-[1px] font-medium"
                showImg={true}
              />
            </div>
          </div>
        </div>
        <FranchiseInfoCard />
      </div>
    </MainLayout>
  );
}

export default FranciseManagementDetail;
