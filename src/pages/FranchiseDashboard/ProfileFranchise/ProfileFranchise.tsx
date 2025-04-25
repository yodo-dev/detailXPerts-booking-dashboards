// import React, { useState } from "react";
// import { ReactSVG } from "react-svg";
// import MainLayout from "@layouts/MainLayout";
// import ReactSwitch from "react-switch";
// import { PrimaryButton } from "@components/Buttons/CommonButtons";
// import refreshIcon from "../../../assets/svgs/refresh-2.svg";
// // import black1 from "../../assets/svgs/settings-1-black.svg";
// // import white1 from "../../assets/svgs/settings-1-white.svg";
// // import black2 from "../../assets/svgs/settings-2-black.svg";
// // import white2 from "../../assets/svgs/settings-2-white.svg";
// // import black3 from "../../assets/svgs/settings-3-black.svg";
// // import white3 from "../../assets/svgs/settings-3-white.svg";
// // import black4 from "../../assets/svgs/settings-4-black.svg";
// // import white4 from "../../assets/svgs/settings-4-white.svg";
// // import black5 from "../../assets/svgs/settings-5-black.svg";
// // import black6 from "../../assets/svgs/settings-6-black.svg";
// // import black7 from "../../assets/svgs/settings-7-black.svg";

// const ProfileFranchise: React.FC = () => {
//   const [tabs, setTabs] = useState(0);
//   const [activeTab, setActiveTab] = useState<
//     | "permission"
//     | "booking"
//     | "payments"
//     | "notifications"
//     | "roles"
//     | "legal"
//     | "integrations"
//   >("permission");

//   const handleTabChange = (index: number, tabName: typeof activeTab) => {
//     setTabs(index);
//     setActiveTab(tabName);
//   };

//   const [viewUsers, setViewUsers] = useState(true);
//   const [addEditUsers, setAddEditUsers] = useState(true);
//   const [deactivateUsers, setDeactivateUsers] = useState(true);
//   const [mustAddNumbers, setMustAddNumbers] = useState(false);

//   const [viewJobRequests, setViewJobRequests] = useState(true);
//   const [assignDetailers, setAssignDetailers] = useState(false);
//   const [cancelRescheduleJobs, setCancelRescheduleJobs] = useState(false);
//   const [viewJobStatus, setViewJobStatus] = useState(true);

//   const [viewWallet, setViewWallet] = useState(true);
//   const [managePayouts, setManagePayouts] = useState(false);
//   const [refundManagement, setRefundManagement] = useState(false);
//   const [stripeSettings, setStripeSettings] = useState(true);

//   return (
//     <MainLayout>
//       <div className="px-[40px]">
//         <h2 className="mb-[20px]">My Profile</h2>

//         <div className=" gap-2 w-[100%]">
//           <div className="p-4 rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
//             {/* User Management */}
//             <div className="">
//               <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
//                 Password Policies
//               </h2>
//               <div className="grid grid-cols-3 gap-3 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t mt-7 border-[#acacac3a]"></div>

//             {/* Job Management */}
//             <div>
//               <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
//                 Access Logs
//               </h2>
//               <div className="grid grid-cols-3 gap-3 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t mt-7 mb-[50px] flex justify-between pt-[50px] border-[#acacac3a]">
//               <h2 className="!text-[25px] !font-semibold">
//                 2 Factor Authentication (2FA)
//               </h2>
//               <div>
//                 <ReactSwitch
//                   checked={viewJobStatus}
//                   onChange={setViewJobStatus}
//                   checkedIcon={false}
//                   uncheckedIcon={false}
//                 />
//               </div>
//             </div>

//             <PrimaryButton
//               btnText="Update Settings"
//               showImg={true}
//               img={refreshIcon}
//               btnClass="bg-[#003CA6] rounded-xl text-white !px-[22px] py-[12px] !w-fit text-[14px]"
//             />
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default ProfileFranchise;



import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import MainLayout from "@layouts/MainLayout";
import ReactSwitch from "react-switch";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import refreshIcon from "../../../assets/svgs/refresh-2.svg";
// import black1 from "../../assets/svgs/settings-1-black.svg";
// import white1 from "../../assets/svgs/settings-1-white.svg";
// import black2 from "../../assets/svgs/settings-2-black.svg";
// import white2 from "../../assets/svgs/settings-2-white.svg";
// import black3 from "../../assets/svgs/settings-3-black.svg";
// import white3 from "../../assets/svgs/settings-3-white.svg";
// import black4 from "../../assets/svgs/settings-4-black.svg";
// import white4 from "../../assets/svgs/settings-4-white.svg";
// import black5 from "../../assets/svgs/settings-5-black.svg";
// import black6 from "../../assets/svgs/settings-6-black.svg";
// import black7 from "../../assets/svgs/settings-7-black.svg";

const Profile: React.FC = () => {
  const [tabs, setTabs] = useState(0);
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
        <h2 className="mb-[20px]">My Profile</h2>

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

                <div className="col-span-1">
                  <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                    <span className="text-[#546E7F] text-[14px]">
                      Add/Edit Users
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

                <div className="col-span-1">
                  <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                    <span className="text-[#546E7F] text-[14px]">
                      Add/Edit Users
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

                <div className="col-span-1">
                  <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                    <span className="text-[#546E7F] text-[14px]">
                      Add/Edit Users
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

                <div className="col-span-1">
                  <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                    <span className="text-[#546E7F] text-[14px]">
                      Add/Edit Users
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
    </MainLayout>
  );
};

export default Profile;

