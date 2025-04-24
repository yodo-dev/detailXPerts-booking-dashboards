import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import CustomerReviews from "../Components/CustomerReviews";
import DetailerReviews from "../Components/DetailerReviews";

const ReviewsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"customer" | "detailer">("customer");

    return (
        <div className="default_container p-4 overflow-x-auto bg-white">

            <div className="rounded-2xl p-3 flex gap-3 justify-start items-center border w-fit border-[#0000001A] mb-[20px]">
                <button
                    type="button"
                    onClick={() => setActiveTab("customer")}
                    className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] ${
                        activeTab === "customer" ? "bg-[#003CA6] text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    <ReactSVG className="fill-current" width={24} src="" />
                    Customers Reviews
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("detailer")}
                    className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] ${
                        activeTab === "detailer" ? "bg-[#003CA6] text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    <ReactSVG className="fill-current" width={24} src="" />
                    Detailer Reviews
                </button>
            </div>

            {activeTab === "customer" ? <CustomerReviews /> : <DetailerReviews />}
        </div>
    );
};

export default ReviewsSection;
