import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import dayjs from "dayjs";

import CommonInput from "@pages/Login/Components/CommonInput";
import AddFranchise from "@pages/Frenchise/Components/AddFranchise";
import SubTasks from "@components/SubTasks/SubTasks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import DataTable from "react-data-table-component";
import { apiDelete, apiGet } from "../../../Auth/Auth";
import { customStyles } from "@components/CustomStylesTable";
import Logo from "@assets/svgs/logo1.svg";
import ActionDropdown from "@components/ActionDropdown";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import { useForm } from "react-hook-form";
import SkeltonLoader from "@components/SkeltonLoader";
// import EditDetailers from "./Components/EditDetailers";
import { ModalDelete } from "@components/Modal";
import Pagination from "@components/Pagination";
import { useDetailerFranchise } from "../../../Hooks/useDetailerFranchise";
import AddDetailerFranchise from "./Components/StepFormAddDetailer/AddDetailerFranchise";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { detailerFranchiseDelete } from "../../../Api/apiDetailersFranchise";
import { useMutation, useQueryClient } from "react-query";

const DetailersFranchise: React.FC = () => {
  const [showSubTask, setShowSubTask] = useState(false);
  const [franchises, setFranchises] = useState([]);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const dropdownRef = useRef(null);
  const [singleFranchises, setSingleFranchises] = useState({});
  const { setValue } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showEditId, setShowEditId] = useState();
  const [loading, setLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [totalRows, setTotalRows] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useDetailerFranchise(currentPage);

  // console.log("showidedit",showEditId)

  const navigate = useNavigate();
  const handleEdit = (rowId) => {
    navigate(`/edit-detailer-franchise/${rowId}`);
  };

  const location = useLocation();
  const id = location.state?.id;
  console.log("id2222", id);

  const queryClient = useQueryClient();
  const columns = [
    {
      name: "ID",
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => <span>{row.id}</span>,
    },

    {
      name: "Detailer",
      selector: (row) => row.first_name,
      minWidth: "230px",
      cell: (row) => (
        <div className="flex gap-2 w-[190px]">
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
              // onClick={() => setShowSubTask({ setShowSubTask })}
              onClick={() => {
                // setShowSubTask(true);
                // setShowEditId(row?.id);
                navigate("/customers-franchise");
              }}
            >
              {/* {row.franchise} */}
              {row?.first_name} {row?.last_name}
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>{row?.email}</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Experience",
      selector: (row) => "2 Years",
      maxWidth: "150px",
    },

    {
      name: "Total Bookings",
      minWidth: "150px",
      selector: (row) => 69,
    },

    {
      name: "Cancelled Bookings",
      minWidth: "50px",
      selector: (row) => row.service,
      cell: (row) => <span>12</span>,
    },

    {
      name: "Earning",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$0.0</span>,
    },

    {
      name: "Rating",
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
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              removeEdit={true}
            />
          </div>
        </div>
      ),
    },
  ];

  const token = localStorage.getItem("token");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getSingleDetailer = async () => {
    setSingleFranchises(null);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${showEditId}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setSingleFranchises(response.payload);
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
  //   getDetailers();
  // }, [currentPage]);

  useEffect(() => {
    getSingleDetailer();
  }, [showEditId]);

  useEffect(() => {
    setTotalRows(data?.totalRecords);
  }, [data]);

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
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

  const deleteMutation = useMutation({
    mutationFn: (id) => detailerFranchiseDelete(id),
    onSuccess: async () => {
      // const isDeleteModal = await ModalDelete();
      queryClient.invalidateQueries(["detailersFranchise"]); // refetch list

      if (!isDeleteModal) {
        return;
      }

      // queryClient.invalidateQueries(["detailersFranchise"]);
      console.log("User deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  const handleDelete = async (id) => {
    const isConfirmed = await ModalDelete(); // Show modal first

    if (isConfirmed) {
      deleteMutation.mutate(id); // Only delete if user confirms
    }
  };

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="md:mb-0 mb-2">Detailers Profile</h2>
          <div className="md:w-[366px] flex justify-end gap-3">
            {/* <CommonInput
              placeholder="filter by franchise, rating, location"
              showImg={true}
              inputClass="!w-[366px]"
              
            /> */}
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
          data={data?.records}
          progressPending={loading}
          pagination
          paginationComponent={() => (
            <Pagination
              currentPage={currentPage}
              totalRows={totalRows}
              rowsPerPage={5}
              onPageChange={handlePageChange}
            />
          )}
          progressComponent={customLoader}
        />

        {showModal ? <AddDetailerFranchise setShowModal={setShowModal} /> : ""}

        {/* {showEditModal ? (
          <EditDetailers
            setShowModal={setShowModal}
            title={"Edit Franchise"}
            getDetailers={getDetailers}
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
            singleData={singleFranchises}
            setShowSubTask={setShowSubTask}
          />
        </div>

        {/* <SubTasks /> */}
      </div>
    </MainLayout>
  );
};

export default DetailersFranchise;
