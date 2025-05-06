import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { after } from "node:test";
import React, { useState } from "react";
import ReactSwitch from "react-switch";
import RefreshIcon from "../../../assets/svgs/refresh-cw.svg";
function RolePermission() {
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
    <div className="p-4 border rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
      {/* User Management */}
      <div>
        <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
          User Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Users</span>
            <ReactSwitch
              checked={viewUsers}
              onChange={setViewUsers}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Add/Edit Users</span>
            <ReactSwitch
              checked={addEditUsers}
              onChange={setAddEditUsers}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">
              Deactivate/Block Users
            </span>
            <ReactSwitch
              checked={deactivateUsers}
              onChange={setDeactivateUsers}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">
              Must add some numbers in password
            </span>
            <ReactSwitch
              checked={mustAddNumbers}
              onChange={setMustAddNumbers}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
        </div>
      </div>

      <div className="border-t mt-7 border-[#acacac3a]"></div>

      {/* Job Management */}
      <div>
        <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
          Job Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">
              View Job Requests
            </span>
            <ReactSwitch
              checked={viewJobRequests}
              onChange={setViewJobRequests}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Assign Detailers</span>
            <ReactSwitch
              checked={assignDetailers}
              onChange={setAssignDetailers}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">
              Cancel/Reschedule Jobs
            </span>
            <ReactSwitch
              checked={cancelRescheduleJobs}
              onChange={setCancelRescheduleJobs}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Job Status</span>
            <ReactSwitch
              checked={viewJobStatus}
              onChange={setViewJobStatus}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
        </div>
      </div>

      <div className="border-t mt-7 border-[#acacac3a]"></div>

      {/* Payments & Wallet */}
      <div>
        <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
          Payments & Wallet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Wallet</span>
            <ReactSwitch
              checked={viewWallet}
              onChange={setViewWallet}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Manage Payouts</span>
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
      <div>
        <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
          Franchise Manaement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Wallet</span>
            <ReactSwitch
              checked={viewWallet}
              onChange={setViewWallet}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Manage Payouts</span>
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
        </div>
      </div>

      {/* Communication Tools */}
      <div>
        <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
          Communication Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Wallet</span>
            <ReactSwitch
              checked={viewWallet}
              onChange={setViewWallet}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Manage Payouts</span>
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
        </div>
      </div>

      {/* Communication Tools */}
      <div>
        <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
          Reporting & Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Wallet</span>
            <ReactSwitch
              checked={viewWallet}
              onChange={setViewWallet}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Manage Payouts</span>
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
        </div>
      </div>

      {/* Communication Tools */}
      <div className="mb-12">
        <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
          System Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">View Wallet</span>
            <ReactSwitch
              checked={viewWallet}
              onChange={setViewWallet}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
            <span className="text-[#546E7F] text-[14px]">Manage Payouts</span>
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
        </div>
      </div>

      <PrimaryButton
        img={RefreshIcon}
        btnText="Update Settings"
        btnClass="bg-[#003CA6] text-white py-[15px] px-[25px] mb-3 !w-fit "
        imgPosition="left"
        showImg={true}
        imgClass="!text-white "
      />
    </div>
  );
}

export default RolePermission;
