import MainLayout from "@layouts/MainLayout";
import React, { useState, useRef, useEffect } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import DataTable from "react-data-table-component";
import AddFranchise from "@pages/Frenchise/Components/AddFranchise";
import SubTasks from "@components/SubTasks/SubTasks";
// import { Swiper, SwiperSlide } from "swiper/react";
import { customStyles } from "@components/CustomStylesTable";
// import "swiper/css";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import Logo from "@assets/svgs/logo1.svg";
import { apiDelete, apiGet } from "../../../Auth/Auth";
import ActionDropdown from "@components/ActionDropdown";
import DayJS from "react-dayjs";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import SkeltonLoader from "@components/SkeltonLoader";
// import EditCustomers from "./Components/EditCustomers";
import { ModalDelete } from "@components/Modal";
import Pagination from "@components/Pagination";
import { useCustomerFranchise } from "../../../Hooks/useCustomerFranchise";

const CustomerFranchise: React.FC = () => {
  const [showSubTask, setShowSubTask] = useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [showEditId, setShowEditId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const dropdownRef = useRef(null);
  // const [showSubTask, setShowSubTask] = useState(false);
  const [singleCustomers, setSingleCustomers] = useState({});
  const { setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState();

  const { data } = useCustomerFranchise(currentPage);


  const columns = [
    {
      name: "ID",
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => <span>{row.id}</span>,
    },

    {
      name: "Customer",
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
          <div className="">
            <div
              className="text-sm cursor-pointer"
              onClick={() => {
                setShowSubTask(true);
                setShowEditId(row?.id);
              }}
            >
              {/* {row.franchise} */}
              {row.first_name} {row.last_name}
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>{row.email}</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Vehicles",
      selector: (row) => row.first_name,
      maxWidth: "100px",
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          20
        </span>
      ),
    },

    {
      name: "Total Bookings",
      maxWidth: "150px",
      selector: (row) => row.total_bookings,
    },

    {
      name: "Cancelled Bookings",
      maxWidth: "180px",
      selector: (row) => row.service,
      cell: (row) => <span>69</span>,
    },

    {
      name: "Amount",
      maxWidth: "130px",
      selector: (row) => 69,
    },

    {
      name: "Rating",
      selector: (row) => row.status,
      maxWidth: "150px",
      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "ACTIVE"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "INACTIVE"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {/* {row.status} */}
          Good
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
              setShowEditModal={setShowEditModal}
              setShowEditId={setShowEditId}
              showEditId={showEditId}
              handleDelete={deleteFrenchise}
            />
          </div>
        </div>
      ),
    },
  ];

  const token = localStorage.getItem("token");

  // const getCustomers = async () => {
  //   setLoading(true);
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_APP_API_URL
  //     }v1/user?role_id=5&page=${currentPage}&limit=5`;

  //     const params = {};
  //     const response = await apiGet(url, params, token);
  //     if (response.success) {
  //       //
  //       setTotalRecords(response.payload.totalRecords);

  //       setCustomers(response?.payload?.records);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     // setLoading(false);
  //   }
  // };


  const getSingleCustomer = async () => {
    setSingleCustomers(null);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${showEditId}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setSingleCustomers(response.payload);

        setValue("first_name", response.payload.first_name);
        setValue("last_name", response.payload.last_name);
        setValue("email", response.payload.email);
        setValue("business_name", response.payload.first_name);
        setValue("business_address", response.payload.country);
        setValue("business_phone", response.payload.number);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  // useEffect(() => {
  //   getCustomers();
  // }, [currentPage]);
  
useEffect(() => {
  if (!data) {
    setLoading(true);
  } else {
    setLoading(false);
  }
}, [data]);

  useEffect(() => {
    getSingleCustomer();
  }, [showEditId]);

  useEffect(() => {
    setTotalRecords(data?.totalRecords);
  }, [data]);

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  const deleteFrenchise = async (id) => {
    const isDeleteModal = await ModalDelete();
    if (!isDeleteModal) {
      return;
    }
    {
      try {
        const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${id}`;

        const params = {};
        const response = await apiDelete(url, params, token);
        if (response.success) {
          setLoading(false);
          // getCustomers();
        }
      } catch (error) {
        setLoading(false);
        console.log("Error :", error);
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2>Customers Management Franchise</h2>
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
          data={data?.records}
          // sortIcon={<ReactSVG src={Chevron}/>}
          // sortIcon={<ChevronDown className="ml-1 text-gray-500" />}
          // defaultSortFieldId={1}
          // defaultSortAsc={true}
          progressPending={loading}
          progressComponent={customLoader}
          pagination
          paginationComponent={() => (
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              rowsPerPage={5}
              totalRows={totalRecords}
            />
          )}
        />


        {showModal ? <AddFranchise setShowModal={setShowModal} /> : ""}

        {/* {showEditModal ? (
          <EditCustomers
            setShowModal={setShowModal}
            title={"Edit Franchise"}
            getCustomers={getCustomers}
            setShowEditModal={setShowEditModal}
            showEditId={showEditId}
          />
        ) : (
          ""
        )} */}

        {/* <SubTasks /> */}

        <div
          className={`fixed top-0 right-0 h-full w-full max-w-[800px] rounded-[40px] bg-white z-50 shadow-lg transition-transform duration-500 ${
            showSubTask ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SubTasks
            singleData={singleCustomers}
            setShowSubTask={setShowSubTask}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CustomerFranchise;
