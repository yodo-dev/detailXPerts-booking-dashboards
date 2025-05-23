import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import MainLayout from "@layouts/MainLayout";
import ReactSwitch from "react-switch";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import refreshIcon from "../../../assets/svgs/refresh-2.svg";
import CheckOut from "./Components/PaymentDetails";

const Profile: React.FC = () => {
  const [tab, setTab] = useState(1);
  const [activeTab, setActiveTab] = useState<
    | "permission"
    | "booking"
    | "payments"
    | "notifications"
    | "roles"
    | "legal"
    | "integrations"
  >("permission");

  const handleTabChange = (index: number, tabName: typeof activeTab) => {
    setTabs(index);
    setActiveTab(tabName);
  };

  const [viewUsers, setViewUsers] = useState(true);
  const [addEditUsers, setAddEditUsers] = useState(true);
  const [deactivateUsers, setDeactivateUsers] = useState(true);
  const [mustAddNumbers, setMustAddNumbers] = useState(false);

  const [viewJobRequests, setViewJobRequests] = useState(true);
  const [assignDetailers, setAssignDetailers] = useState(false);
  const [cancelRescheduleJobs, setCancelRescheduleJobs] = useState(false);
  const [viewJobStatus, setViewJobStatus] = useState(true);

  const [viewWallet, setViewWallet] = useState(true);
  const [managePayouts, setManagePayouts] = useState(false);
  const [refundManagement, setRefundManagement] = useState(false);
  const [stripeSettings, setStripeSettings] = useState(true);

  return (
    <MainLayout>
      <div className="default_container ">
        <div className="inline-flex gap-3 mb-10 w-full">
          <button
            onClick={() => setTab(1)}
            className={`h-fit cursor-pointer rounded-full px-[30px] py-[12px] w-fit ${
              tab === 1 ? "bg-[#003CA6] text-white" : "bg-gray-200 text-black"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setTab(2)}
            className={`h-fit cursor-pointer rounded-full px-[30px] py-[12px] w-fit ${
              tab === 2 ? "bg-[#003CA6] text-white" : "bg-gray-200 text-black"
            }`}
          >
            Payment Details
          </button>
        </div>

        {tab == 1 ? (
          <div className="">
            <h2 className="mb-[20px] mt-10">Profile</h2>

            <div className=" gap-2 w-[100%] bg-white px-[5px]">
              <div className="p-4 rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
                {/* User Management */}
                <div className="">
                  <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
                    Password Policies
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          First letter must be capital
                        </span>
                        <ReactSwitch
                          checked={viewUsers}
                          onChange={setViewUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Add “special characters” in password
                        </span>
                        <ReactSwitch
                          checked={addEditUsers}
                          onChange={setAddEditUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4 ">
                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Password must contain 10 characters length
                        </span>
                        <ReactSwitch
                          checked={viewUsers}
                          onChange={setViewUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Must add some numbers in password
                        </span>
                        <ReactSwitch
                          checked={addEditUsers}
                          onChange={setAddEditUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4 ">
                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          View Users
                        </span>
                        <ReactSwitch
                          checked={viewUsers}
                          onChange={setViewUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-7 border-[#acacac3a]"></div>

                {/* Job Management */}
                <div>
                  <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
                    Access Logs
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 ">
                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Track user login activity
                        </span>
                        <ReactSwitch
                          checked={viewUsers}
                          onChange={setViewUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Restrict login with another IP address
                        </span>
                        <ReactSwitch
                          checked={addEditUsers}
                          onChange={setAddEditUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 mt-4 ">
                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Location & Services Manage
                        </span>
                        <ReactSwitch
                          checked={viewUsers}
                          onChange={setViewUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                        <span className="text-[#546E7F] text-[14px]">
                          Get alerts of failed login
                        </span>
                        <ReactSwitch
                          checked={addEditUsers}
                          onChange={setAddEditUsers}
                          checkedIcon={false}
                          uncheckedIcon={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-7 mb-[50px] grid  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 pt-[50px] border-[#acacac3a]">
                  <div className="col-span-1">
                    <h2 className="!text-[25px] !font-semibold">
                      2 Factor Authentication (2FA)
                    </h2>
                  </div>
                  <div className="col-span-1">
                    <div className="flex justify-end me-3">
                      <ReactSwitch
                        checked={viewJobStatus}
                        onChange={setViewJobStatus}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                  </div>
                </div>

                <PrimaryButton
                  btnText="Update Settings"
                  showImg={true}
                  img={refreshIcon}
                  btnClass="bg-[#003CA6] rounded-xl text-white !px-[22px] py-[12px] !w-fit text-[14px]"
                />
              </div>
            </div>
          </div>
        ) : (
          <CheckOut />
        )}
      </div>
    </MainLayout>
  );
};

export default Profile;
