import React from "react";
// import UserPic from "../../../assets/images/user-profile-img.png";
// import StartPic from "../../../assets/svgs/starsRating.svg";
// import Dollar from "../../../assets/svgs/dollar-circle.svg"
// import Callender from "../../../assets/svgs/calendar.svg"
// import settingsIcon from "../../../assets/svgs/setting-icon.svg"
const CustomerReviews: React.FC = () => {
    return (
        <div className="rounded-xl flex flex-col items-start p-[20px] gap-3 border border-[#0000001A]">
            <div className="flex gap-2 cursor-pointer">
                {/* <img src={UserPic} className="w-8 h-8 rounded-full" /> */}
                <div>
                    <div className="text-[16px] font-semibold">Rayna Franci</div>
                    <div className="text-[12px] font-medium text-gray-400">Customer</div>
                </div>
            </div>

            <div className="bg-[#F7F8FC] p-[20px] w-full rounded-[20px]">
                <div className="bg-[#fff] px-[15px] py-[18px] w-full rounded-[20px] flex">
                    <div className="w-full bg-white">
                        <h3 className="!text-[20px] !font-semibold text-[#252525] ">Detailer & Service Info:</h3>
                        <div className="flex flex-col gap-2 mt-[16px]">
                            <div className="flex gap-2 cursor-pointer">
                                {/* <img src={UserPic} className="w-8 h-8 rounded-full" /> */}
                                <div>
                                    <div className="text-[16px] font-semibold">Jane Cooper</div>
                                    <div className="text-[12px] font-medium text-gray-400">Detailer</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <p className=" ">Detailer Rating</p>
                                {/* <img src={StartPic} alt="" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#003CA608] w-full pt-[17px] ps-[10px] pe-[10px] rounded-[8px]">
                        <div>
                            <div className="border-[#0000001A] border-b flex justify-between mb-2 pb-[10px]">
                                <div className="flex items-center justify-center gap-1.5 ">
                               {/* <img src={Callender} alt="" /> <span className="text-[14px] font-medium">Date:</span> */}
                                </div> 
                                <span className="text-[14px] font-medium">14 April 2025</span>
                            </div>
                            <div className="border-[#0000001A] border-b flex justify-between mb-2 pb-[10px]">
                                <div className="flex items-center justify-center gap-1.5 ">
                               {/* <img src={settingsIcon} alt="" /> <span className="text-[14px] font-medium">Service:</span> */}
                                </div>
                                <span className="text-[14px] font-medium">Premium Wash</span>
                            </div>
                            <div className="border-[#0000001A] flex items-center pb-[10px] justify-between">
                                <div className="flex items-center justify-center gap-1.5 ">
                               {/* <img src={Dollar} alt="" /> <span className="text-[14px] font-medium">Price:</span> */}
                                </div>
                                <span className="text-[14px] font-medium">$72.39</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                <div className="flex justify-between items-center">
                    <h3 className="mb-2 !text-[18px] !font-semibold mt-[20px]">Customer Comment:</h3>
                    <div className="flex items-center gap-3 pt-3 pr-4">
                        <p className="!font-semibold !text-[16px] pr-1.5">Feedback:</p>
                                <p className="text-[14px] font-medium">Rating</p>
                                {/* <img src={StartPic} alt="" className="w-[100px]" /> */}
                            </div>
                    </div>
                    <div className="bg-white border border-[#CECECE] !font-normal !text-[14px] !text-[#A1A1A1] rounded-[8px] p-[15px]">
                        <p>Last week, my car suddenly broke down while I was driving to work. I noticed a strange knocking sound coming from the engine just before it stalled. I quickly pulled over to a safe spot and called roadside assistance. The car was towed to a nearby garage for inspection. After a quick diagnosis, the mechanic found that the timing belt was damaged. They also discovered a minor oil leak near the valve cover. I was told the repairs would take around two days. The total cost, including parts and labor, came to about $850. Once the repairs were done, the car started running smoothly again. The mechanic advised a follow-up check in three months just to be safe.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
