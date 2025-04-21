import React from "react";
import MainLayout from "@layouts/MainLayout"; 

const notifications = [
  {
    company: "HD",
    title: "New Customer Onboarded!",
    message: "It's a confirmation notification of your service.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "BD",
    title: "BD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "FD",
    title: "FD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "MD",
    title: "MD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "XD",
    title: "XD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "FD",
    title: "FD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "HD",
    title: "HD Detailers Franchise",
    message: "It's a confirmation notification of your service.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
];

const Notifications: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <input type="date" name="" id="" className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]" />

        </div>

        <div className="bg-white rounded-[20px] shadow-lg p-6">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start py-4"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#0066FF] text-white font-normal w-10 h-10 rounded-[12px] flex items-center justify-center text-[14px]">
                  {item.company}
                </div>
                <div>
                  <p className="font-semibold text-[#252525]">{item.title}</p>
                  <p className="text-[#595959] text-[13px]">{item.message}</p>
                </div>
              </div>
              <p className="text-[14px] text-[#252525] whitespace-nowrap">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;

