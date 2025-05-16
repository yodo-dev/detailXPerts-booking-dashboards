import SelectField from "@components/SelectField/SelectField";
import userImg from "../../assets/images/user-profile-img.png";
import { ReactSVG } from "react-svg";
import StartIcon from "../../assets/svgs/Star 3.svg";
import AvatarPic from "../../assets/svgs/Avatars.svg";
import CommonInput from "@components/inputs/CommonInput";
import { useState } from "react";
import AddCircle from "../../assets/svgs/add-circle.svg";
import ReactSwitch from "react-switch";
import { ArrowLeft, ChevronLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import TcikIcon from "@assets/svgs/icon.svg";
import CrossIcon from "@assets/svgs/cross.svg";

const DetailerProfile: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [fieldStep, setFieldStep] = useState(0);
  const [role, setRole] = useState(0);
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

  const handleAddMore = () => {
    if (fieldStep < 3) {
      setFieldStep(fieldStep + 1);
    }
  };

    const [isActive, setIsActive] = useState(false);
  
    const handleToggle = () => {
      setIsActive(!isActive);
    };

  return (
    <MainLayout>
      <div className="p-6 bg-[#F8F9FA] default_container  min-h-screen">
        <div className="flex items-center gap-4">
          <Link to={"/booking-management"}>
            <ChevronLeft />
          </Link>
          <span>Back</span>
          <h2 className="!text-black">Detailer Profile:</h2>
        </div>

        <div className="flex space-x-4 mb-6 mt-6">
          <button
            className={`px-4 py-2 ${
              role === 0 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
            } rounded-[12px] text-[14px] font-semibold`}
            onClick={() => setRole(0)}
          >
            Personal Info
          </button>
          <button
            className={`px-4 py-2 ${
              role === 1 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
            } rounded-[12px] text-[14px] font-semibold`}
            onClick={() => setRole(1)}
          >
            Role Permissions
          </button>
        </div>

        {role == 0 ? (
          <div className="bg-white !rounded-[20px] p-[28px]">
            <div className=" mx-auto  rounded-lg shadow-md ">
              {/* Tabs */}

              {/* Profile Header */}
              {/* Top Person Card */}
              <div
                style={{ backgroundColor: "rgba(27, 61, 150, 0.05)" }}
                className="  border-[1px] border-[#e6e6e6] flex justify-between items-center p-[26px] pe-[120px] rounded-2xl mb-5"
              >
                <div className="flex gap-2 ">
                  <div className="w-[95px] h-[95px] flex items-center justify-center border border-[#25252526] rounded-full">
                    <img
                      src={userImg}
                      alt=""
                      className="w-[95px] h-[95px] rounded-full"
                    />
                  </div>

                  <div className="flex items-start justify-center flex-col ">
                    <div className="text-sm cursor-pointer text-[20px] font-semibold">
                      Luis Froza
                    </div>
                    <div className="text-xs text-gray-400 flex gap-1 mt-1">
                      <p className="text-[15px]">abc@someone.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <div className="flex flex-col justify-start items-start">
                      <div className="flex">
                        <ReactSVG src={StartIcon} />
                        <span>4.5 (237)</span>
                      </div>
                      <ReactSVG src={AvatarPic} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <span className="text-[#2929297c] font-medium">
                      Position
                    </span>
                  </div>
                  <p className="font-medium">Detailer</p>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <span className="text-[#2929297c] font-medium">
                      Joining Date
                    </span>
                  </div>
                  <p className="font-medium">21-08-2025</p>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <span className="text-[#2929297c] font-medium">
                      Total Bookigns
                    </span>
                  </div>
                  <p className="font-medium">400+</p>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <span className="text-[#2929297c] font-medium">
                      Service
                    </span>
                  </div>
                  <p className="font-medium">Car Radiator</p>
                  <p className="font-medium">Specialist</p>
                </div>

                <div>
                  <div className="flex mb-[5px]">
                    <span className="text-[#2929297c] font-medium">
                      Profile Status
                    </span>
                  </div>


                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer "
                      checked={isActive}
                      onChange={handleToggle}
                    />
                    <div className="relative w-20 h-10 bg-[#1D1B201F] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ffffff00] rounded-full peer peer-checked:after:translate-x-10 after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#0EA363]">
                      {isActive ? (
                        <>
                          <ReactSVG
                            className="absolute z-9 right-3 top-4 w-[11px] h-[8px] text-black pointer-events-none"
                            src={TcikIcon}
                          />
                          <p className="text-white absolute top-[14px] left-[5px] text-[9px]">
                            Activate
                          </p>
                        </>
                      ) : (
                        <>
                          <ReactSVG
                            className="absolute z-9 left-4 top-4 w-[11px] h-[8px] text-black pointer-events-none"
                            src={CrossIcon}
                          />
                          <p className="text-[#ACA7AC] absolute top-[14px] right-[5px] text-[9px]">
                            Disable
                          </p>
                        </>
                      )}
                    </div>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {isActive ? "" : ""}
                    </span>
                  </label>
                </div>
              </div>
              {/* Top Person Card */}
            </div>
            {/* 2nd--------------- */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 pt-4">
              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Full Name
                </p>
                <CommonInput
                  placeholder="Brooklyn Simmons"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Email
                </p>
                <CommonInput
                  placeholder="Brooklyn@email.com"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Mobile Number
                </p>
                <CommonInput
                  placeholder="+1 0215 212 1235"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Mobile Number
                </p>
                <CommonInput
                  placeholder="+1 0215 212 1235"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>
            </div>

            <h3 className="font-medium !text-[18px] mb-2">Address Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Flat/House/building Number
                </p>
                <CommonInput
                  placeholder="50B/2"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Street/Town
                </p>
                <CommonInput
                  placeholder="Hike"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  City
                </p>
                <CommonInput
                  placeholder="Urban"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Country
                </p>
                <CommonInput
                  placeholder="United Kingdom"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <button
                className="text-[#1B3D96] flex gap-2 text-end text-sm cursor-pointer disabled:opacity-50"
                onClick={handleAddMore}
                disabled={fieldStep >= 3}
              >
                Add More Address
                <img src={AddCircle} alt="" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {fieldStep >= 1 && (
                <div className="">
                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Flat/House
                    </p>
                    <CommonInput
                      placeholder="Flat/House"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>
                </div>
              )}
              {fieldStep >= 2 && (
                <div>
                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Building Number
                    </p>
                    <CommonInput
                      placeholder="Building Number"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>
                </div>
              )}
              {fieldStep >= 3 && (
                <div>
                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Street No
                    </p>
                    <CommonInput
                      placeholder="Street No"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>
                </div>
              )}
            </div>
            <button className="w-full bg-[#1B3D96] text-white py-2 rounded-[8px] cursor-pointer">
              Update
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white !rounded-[20px] p-[28px]">
              <div className=" mx-auto  rounded-lg shadow-md ">
                {/* Tabs */}
                {/* <div className="flex space-x-4 mb-6">
                  <button
                    className={`px-4 py-2 ${
                      role == 0 ? "bg-[#003CA6] " : "bg-white"
                    }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
                    onClick={() => setRole(0)}
                  >
                    Personal Info
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      role == 0 ? "bg-white " : "bg-[#003CA6]"
                    }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
                    onClick={() => setRole(1)}
                  >
                    Role Permissions
                  </button>
                </div> */}

                {/* Payments & Wallet */}
                <div>
                  <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                    Payments & Wallet
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        View Wallet
                      </span>
                      <ReactSwitch
                        checked={viewWallet}
                        onChange={setViewWallet}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Manage Payouts
                      </span>
                      <ReactSwitch
                        checked={managePayouts}
                        onChange={setManagePayouts}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Refund Management
                      </span>
                      <ReactSwitch
                        checked={refundManagement}
                        onChange={setRefundManagement}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Stripe Integration Settings
                      </span>
                      <ReactSwitch
                        checked={stripeSettings}
                        onChange={setStripeSettings}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                  </div>
                </div>

                {/* Franchise Management */}
                <div className="mt-4">
                  <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                    Franchise Manaement
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        View Wallet
                      </span>
                      <ReactSwitch
                        // checked={viewWallet}
                        // onChange={setViewWallet}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Manage Payouts
                      </span>
                      <ReactSwitch
                        // checked={managePayouts}
                        // onChange={setManagePayouts}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Refund Management
                      </span>
                      <ReactSwitch
                        // checked={refundManagement}
                        // onChange={setRefundManagement}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                  </div>
                </div>

                {/* Communication Tools */}
                <div className="mt-4">
                  <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                    Communication Tools
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        View Wallet
                      </span>
                      <ReactSwitch
                        // checked={viewWallet}
                        // onChange={setViewWallet}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Manage Payouts
                      </span>
                      <ReactSwitch
                        // checked={managePayouts}
                        // onChange={setManagePayouts}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                      <span className="text-[#546E7F] text-[14px]">
                        Refund Management
                      </span>
                      <ReactSwitch
                        // checked={refundManagement}
                        // onChange={setRefundManagement}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                  </div>

                  <button className="w-full mt-10 bg-[#003CA6] flex justify-center items-center gap-2 text-white py-3 rounded-[8px] cursor-pointer">
                    <RefreshCcw />
                    <span>Update Settings</span>
                  </button>
                </div>
              </div>
              {/* 2nd--------------- */}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default DetailerProfile;
