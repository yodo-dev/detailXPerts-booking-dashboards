import MainLayout from "@layouts/MainLayout";
import React, { useState, useRef, useEffect } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import AddFranchise from "@pages/Frenchise/Components/AddFranchise";
import DataTable from "react-data-table-component";
import Logo from "@assets/svgs/logo1.svg";
import DayJS from "react-dayjs";
import dayjs from "dayjs";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import ActionDropdown from "@components/ActionDropdown";
import { customStyles } from "@components/CustomStylesTable";
import SkeltonLoader from "@components/SkeltonLoader";
import { apiGet } from "../../Auth/Auth";

const PaymentManagement: React.FC = () => {
  const tableData = [
    { key: "id", label: "Invoice ID" },
    { key: "franchise", label: "Franchise" },
    { key: "amount", label: "Amount" },
    { key: "paymentMethod", label: "Payment Method" },
    { key: "bookings", label: "Bookings" },
    { key: "invoiceDate", label: "Invoice date" },
    // { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];
  const [showSubTask, setShowSubTask] = useState(false);
  const [showEditId, setShowEditId] = useState();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  const columns = [
    {
      name: "Invoice ID",
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => <span>{row.id}</span>,
    },

    {
      name: "Franchise",
      selector: (row) => row.first_name,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <div
              className="text-sm cursor-pointer "
              onClick={() => {
                setShowSubTask(true);
                setShowEditId(row?.id);
              }}
            >
              {/* {row.franchise} */}
            </div>
            <div className="  flex gap-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span className="text-[12px] font-medium text-[#000000]">
                {row.first_name}
                {row.last_name ? row.last_name : "Stripe@co"}
              </span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Amount",
      selector: (row) => row.first_name,
      minWidth: "230px",
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          $0.0
        </span>
      ),
    },

    {
      name: "Payment Method",
      minWidth: "150px",
      selector: (row) => row.created_at,
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          {/* {row.created_at} */}
          Stripe
        </span>
      ),
    },

    {
      name: "Bookings",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>30</span>,
    },

    {
      name: "Invoice Date	",
      minWidth: "150px",
      selector: (row) => row.created_at,
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          {/* {row.created_at} */}
          <span>{dayjs(row?.created_at).format("DD MMM YYYY")}</span>
        </span>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "130px",
      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "COMPLETED"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },

    {
      name: "Action",
      selector: (row) => row.action,
      minWidth: "10px",
      cell: (row) => (
        <div>
          <span
            onClick={() => {
              setOpenDropdown(openDropdown === row.id ? null : row.id);
            }}
            className="cursor-pointer bg-red-500"
          >
            <ReactSVG src={DotsIcon} />
          </span>
          <div ref={dropdownRef}>
            <ActionDropdown
              setOpenDropdown={setOpenDropdown}
              openDropdown={openDropdown}
              rowId={row.id}
              // setShowEditModal={setShowEditModal}
              setShowEditId={setShowEditId}
              showEditId={showEditId}
            />
          </div>
        </div>
      ),
    },
  ];
  const dropdownRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");

  const getPayment = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/payment`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        //

        setCustomers(response?.payload?.records);
        setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getPayment();
  }, []);

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2>Payments & Invoicing</h2>
          <div className="md:w-[366px]">
            <CommonInput
              placeholder="filter by franchise, rating, location"
              showImg={true}
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={customers}
          // sortIcon={<ReactSVG src={Chevron}/>}
          // sortIcon={<ChevronDown className="ml-1 text-gray-500" />}
          // defaultSortFieldId={1}
          // defaultSortAsc={true}
          progressPending={loading}
          progressComponent={customLoader}
        />

        {showModal ? (
          <AddFranchise setShowModal={setShowModal} title={"Edit Payments"} />
        ) : (
          ""
        )}
      </div>
    </MainLayout>
  );
};

export default PaymentManagement;
