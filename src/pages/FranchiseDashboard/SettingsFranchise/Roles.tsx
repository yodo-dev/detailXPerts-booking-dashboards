import React, { useState } from "react";
import ReactSwitch from "react-switch";
import LeftArrow from "@assets/svgs/arrow-left.svg";
import SelectField from "@components/SelectField/SelectField";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import ExistingRolesTable from "./ExistingRolesTable";
function Roles() {
  const dataArr = [
    {
      label: "Willington block",
      value: "willington",
    },
    {
      label: "Kingston block",
      value: "kingston",
    },
    {
      label: "Madison block",
      value: "madison",
    },
    {
      label: "Jefferson block",
      value: "jefferson",
    },
  ];
  const [stripeApi, setStripeApi] = useState(true);
  const [maxBooking, setMaxBooking] = useState(true);
  const [maxAdvance, setMaxAdvance] = useState(true);
  const [cancelationPolicy, setCancelationPolicy] = useState(false);
  const [toggleInstant, setToggleInstant] = useState(false);
  const [section, setSection] = useState(2);
  return (
    <div className="">
      {section == 1 ? (
        <div>
          <div className="flex gap-[8px] items-center mb-[28px]">
            <div onClick={()=>(setSection(2))} className="flex gap-3 cursor-pointer">
              <img src={LeftArrow} alt="" />
              <p className="text-[#5B5B5B] text-[16px] font-medium ">Back</p>
            </div>
            <p className="pl-3 text-[#252525] text-[20px] font-bold ">
              Create a New Role
            </p>
          </div>

          <div className="p-[20px] border-[1px] max-w-full rounded-[15px] border-[#0000001A]">
            <div className=" mb-[20px] ">
              <h2 className="!font-medium !text-[18px] mb-[10px] !text-[#252525]">
                {" "}
                Role Title
              </h2>
              <SelectField
                defaultValue="Select Role"
                options={dataArr}
                styleSelect="select-style !font-medium !w-full bg-gray-100 border border-[#25252526] text-gray-900 !text-[16px] rounded-md focus:ring-[#25252526] focus:border-[#25252526] block !py-[15px] !px-[16px]  "
              />
            </div>

            <div>
              <p className="text-[18px] mb-[20px]  font-medium text-[#252525]">
                Permissions
              </p>

              <div className="grid grid-cols-1 mb-7 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Stripe API Keys
                  </span>
                  <ReactSwitch
                    checked={stripeApi}
                    onChange={setStripeApi}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Max Bookings per Technician per Day
                  </span>
                  <ReactSwitch
                    checked={maxBooking}
                    onChange={setMaxBooking}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Minimum Advance Notice for Booking (e.g., 2 hrs)
                  </span>
                  <ReactSwitch
                    checked={maxAdvance}
                    onChange={setMaxAdvance}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Cancellation Policy Text / Toggle Refund Logic
                  </span>
                  <ReactSwitch
                    checked={cancelationPolicy}
                    onChange={setCancelationPolicy}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Toggle Instant Booking (ON/OFF)
                  </span>
                  <ReactSwitch
                    checked={toggleInstant}
                    onChange={setToggleInstant}
                    checkedIcon={true}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Stripe API Keys
                  </span>
                  <ReactSwitch
                    checked={stripeApi}
                    onChange={setStripeApi}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Max Bookings per Technician per Day
                  </span>
                  <ReactSwitch
                    checked={maxBooking}
                    onChange={setMaxBooking}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Minimum Advance Notice for Booking (e.g., 2 hrs)
                  </span>
                  <ReactSwitch
                    checked={maxAdvance}
                    onChange={setMaxAdvance}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Cancellation Policy Text / Toggle Refund Logic
                  </span>
                  <ReactSwitch
                    checked={cancelationPolicy}
                    onChange={setCancelationPolicy}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Toggle Instant Booking (ON/OFF)
                  </span>
                  <ReactSwitch
                    checked={toggleInstant}
                    onChange={setToggleInstant}
                    checkedIcon={true}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Stripe API Keys
                  </span>
                  <ReactSwitch
                    checked={stripeApi}
                    onChange={setStripeApi}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Max Bookings per Technician per Day
                  </span>
                  <ReactSwitch
                    checked={maxBooking}
                    onChange={setMaxBooking}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Minimum Advance Notice for Booking (e.g., 2 hrs)
                  </span>
                  <ReactSwitch
                    checked={maxAdvance}
                    onChange={setMaxAdvance}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Cancellation Policy Text / Toggle Refund Logic
                  </span>
                  <ReactSwitch
                    checked={cancelationPolicy}
                    onChange={setCancelationPolicy}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Toggle Instant Booking (ON/OFF)
                  </span>
                  <ReactSwitch
                    checked={toggleInstant}
                    onChange={setToggleInstant}
                    checkedIcon={true}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Stripe API Keys
                  </span>
                  <ReactSwitch
                    checked={stripeApi}
                    onChange={setStripeApi}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Max Bookings per Technician per Day
                  </span>
                  <ReactSwitch
                    checked={maxBooking}
                    onChange={setMaxBooking}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Minimum Advance Notice for Booking (e.g., 2 hrs)
                  </span>
                  <ReactSwitch
                    checked={maxAdvance}
                    onChange={setMaxAdvance}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Cancellation Policy Text / Toggle Refund Logic
                  </span>
                  <ReactSwitch
                    checked={cancelationPolicy}
                    onChange={setCancelationPolicy}
                    checkedIcon={false}
                    uncheckedIcon={false}
                  />
                </div>
                <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                  <span className="text-[#546E7F] text-[14px]">
                    Toggle Instant Booking (ON/OFF)
                  </span>
                  <ReactSwitch
                    checked={toggleInstant}
                    onChange={setToggleInstant}
                    checkedIcon={true}
                    uncheckedIcon={false}
                  />
                </div>
              </div>

              <div>
                <PrimaryButton
                  btnText="Create Role"
                  btnClass="w-full py-[12px] hover:bg-[#1b1d96] transition bg-[#1B3D96] text-white text-[16px] font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ExistingRolesTable setSection={setSection} />
      )}
    </div>
  );
}

export default Roles;
