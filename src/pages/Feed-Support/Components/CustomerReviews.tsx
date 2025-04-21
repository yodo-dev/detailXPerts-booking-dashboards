import React from "react";
import UserPic from "../../../assets/images/user-profile-img.png";
import StartPic from "../../../assets/svgs/starsRating.svg";

const CustomerReviews: React.FC = () => {
    return (
        <div className="rounded-xl flex flex-col items-start p-[20px] gap-3 border border-[#0000001A]">
            <div className="flex gap-2">
                <img src={UserPic} className="w-8 h-8 rounded-full" />
                <div>
                    <div className="text-[16px] font-bold">Alex</div>
                    <div className="text-[12px] font-medium text-gray-400">Customer</div>
                </div>
            </div>

            <div className="bg-[#F7F8FC] p-[20px] w-full rounded-[20px]">
                <div className="bg-[#F7F8FC] p-[15px] w-full rounded-[20px] flex">
                    <div className="w-full">
                        <h3>Detailer & Service Info:</h3>
                        <div className="flex flex-col gap-2 mt-[16px]">
                            <div className="flex gap-2">
                                <img src={UserPic} className="w-8 h-8 rounded-full" />
                                <div>
                                    <div className="text-[16px] font-bold">Jane Cooper</div>
                                    <div className="text-[12px] font-medium text-gray-400">Detailer</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <p className="text-[14px] font-normal">Detailer Rating</p>
                                <img src={StartPic} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#003CA608] w-full pt-[17px] ps-[10px] pe-[10px] rounded-[8px]">
                        <div>
                            <div className="border-[#0000001A] border-b flex justify-between pb-[10px]">
                                <span className="text-[14px] font-medium">Date:</span>
                                <span className="text-[14px] font-medium">14 April 2025</span>
                            </div>
                            <div className="border-[#0000001A] border-b flex justify-between pb-[10px]">
                                <span className="text-[14px] font-medium">Service:</span>
                                <span className="text-[14px] font-medium">Premium Wash</span>
                            </div>
                            <div className="border-[#0000001A] flex justify-between">
                                <span className="text-[14px] font-medium">Price:</span>
                                <span className="text-[14px] font-medium">$72.39</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                <div className="flex justify-between items-center">
                    <h3 className="mb-2 text-[16px] font-bold mt-[20px]">Customer Comment:</h3>
                    <div className="flex items-center gap-3 pt-3 pr-4">
                                <p className="text-[14px] font-normal">Detailer Rating</p>
                                <img src={StartPic} alt="" className="w-[100px]" />
                            </div>
                    </div>
                    <textarea className="border !border-[#CECECE] bg-white w-full rounded-[8px]" rows={6}></textarea>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
