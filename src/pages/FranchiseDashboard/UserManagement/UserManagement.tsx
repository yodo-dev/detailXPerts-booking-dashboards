import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Chevron from "@assets/svgs/selector-vertical.svg";
import { CustomCheckbox } from "@components/Checkbox/CustomCheckbox.js";

import SubTasks from "@components/SubTasks/SubTasks";
import DataTable from "react-data-table-component";
import { apiDelete, apiGet } from "../../../Auth/Auth";
import SkeltonLoader from "@components/SkeltonLoader";
import { customStyles } from "@components/CustomStylesTable";
import Logo from "../../assets/svgs/logo1.svg";
import LocationIcon from "../../assets/svgs/location.svg";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import ActionDropdown from "@components/ActionDropdown";
import dummyImage from "@assets/images/user-profile-img.png";
// import EditFranchise from "./Components/EditFranchise";
import { useForm } from "react-hook-form";
import { ModalDelete } from "@components/Modal";
import Pagination from "@components/Pagination";

import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
const UserManagement: React.FC = () => {
  const navigate = useNavigate();
  const columns = [
    {
      name: (
        <span className="flex items-center gap-1 p-0 ml-0">
          <div className="flex ">
            <CustomCheckbox /> ID
          </div>
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => (
        <span className="flex">
          {" "}
          <CustomCheckbox /> {row.id}
        </span>
      ),
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Freelancers
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      selector: (row) => row.name,
      minWidth: "250px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 "
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <img
              src={dummyImage}
              // alt={row.detailer.name}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          </div>
          <div className="flex items-center">
            <div
              onClick={() => {
                // setShowSubTask(true);
                navigate("/freelancer-profile");
                setShowEditId(row.id);
              }}
              className="text-sm cursor-pointer "
            >
              {/* {row.franchise} */}
              {row.name}
              <p className="text-[12px] !text-[#4D5361]">{row?.email}</p>
            </div>
            {/* <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div> */}
          </div>
        </div>
      ),
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Bookings
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "50px",
      selector: (row) => row.service,
      cell: (row) => <span>200</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Last Booking
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "100px",
      selector: (row) => row.booking,
      cell: (row) => <span>18-may-2024</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Earnings
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$0.0</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Status
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      selector: (row) => row.status,
      minWidth: "130px",
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
              // setIsDropdownOpen(!isDropdownOpen);
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

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditId, setShowEditId] = useState();
  const [showSubTask, setShowSubTask] = useState(false);
  const [loading, setLoading] = useState(true);
  const [franchises, setFranchises] = useState([]);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [singleFranchises, setSingleFranchises] = useState({});
  const dropdownRef = useRef(null);
  const { setValue } = useForm();
  const [totalRecords, setTotalRecords] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [addEditUsers, setAddEditUsers] = useState(true);

  const token = localStorage.getItem("token");

  const getFranchise = async () => {
    setLoading(true);
    try {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }v1/franchise/?page=${currentPage}&limit=${5}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setTotalRecords(response.payload.totalRecords);
        setLoading(false);
        setFranchises(response.payload.records);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getFranchise();
  }, [currentPage]);

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
        const url = `${import.meta.env.VITE_APP_API_URL}v1/franchise/${id}`;

        const params = {};
        const response = await apiDelete(url, params, token);
        if (response.success) {
          setLoading(false);
          getFranchise();
        }
      } catch (error) {
        setLoading(false);
        console.log("Error :", error);
      }
    }
  };

  const getSingleFranchise = async () => {
    setSingleFranchises(null);
    // setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${showEditId}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        // setLoading(false);
        setSingleFranchises(response.payload);
        setValue("first_name", response.payload.first_name);
        setValue("last_name", response.payload.last_name);
        setValue("email", response.payload.email);
        setValue("business_name", response.payload.first_name);
        setValue("business_address", response.payload.country);
        setValue("business_phone", response.payload.number);
      }
    } catch (error) {
      // setLoading(false);
      console.log("Error :", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getSingleFranchise();
  }, [showEditId]);

  return (
    <MainLayout>
      <div className="default_container overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="text-lg font-semibold md:mb-0 mb-2">
            User Management
          </h2>
          <div className="flex justify-center gap-[20px]">
            <div className="md:w-[366px]">
              <CommonInput
                placeholder="search by city, plan, activity"
                showImg={true}
                inputClass="w-full"
              />
            </div>
              <PrimaryButton
                btnText="Add User"
                btnClass="bg-[#003CA6] rounded-xl text-white px-[18px] py-[12px] w-full sm:max-w-[210px]"
                btnTextClass="text-[16px]"
                // onClick={() => setShowModal(true)}
                onClick={() => navigate("/add-detailer-franchise")}
              />
          </div>
        </div>

        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={franchises}
          pagination
          paginationComponent={() => (
            <Pagination
              currentPage={currentPage}
              totalRows={totalRecords}
              rowsPerPage={5}
              onPageChange={handlePageChange}
            />
          )}
          // sortIcon={<ReactSVG src={Chevron}/>}
          // sortIcon={<ChevronDown className="ml-1 text-gray-500" />}
          // defaultSortFieldId={1}
          // defaultSortAsc={true}
          progressPending={loading}
          progressComponent={customLoader}
        />

        {showModal ? (
          <AddFranchise
            setShowModal={setShowModal}
            title={"Edit Franchise"}
            getFranchise={getFranchise}
          />
        ) : (
          ""
        )}

        {showEditModal ? (
          <EditFranchise
            setShowModal={setShowModal}
            title={"Edit Franchise"}
            getFranchise={getFranchise}
            setShowEditModal={setShowEditModal}
            showEditId={showEditId}
          />
        ) : (
          ""
        )}

        {/* <SubTasks /> */}

        <div
          className={`fixed top-0 right-0 h-full w-full max-w-[800px] rounded-[40px] bg-white z-50 shadow-lg transition-transform duration-500 ${
            showSubTask ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SubTasks
            singleData={singleFranchises}
            setShowSubTask={setShowSubTask}
          />
        </div>

        {/* <SubTasks /> */}
      </div>
    </MainLayout>
  );
};

export default UserManagement;
