import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import AddFranchise from "./Components/AddFranchise";
import SubTasks from "@components/SubTasks/SubTasks";
import DataTable from "react-data-table-component";
import { apiDelete, apiGet } from "../../../Auth/Auth";
import SkeltonLoader from "@components/SkeltonLoader";
import { customStyles } from "@components/CustomStylesTable";
import Logo from "../../assets/svgs/logo1.svg";
import LocationIcon from "@assets/svgs/location.svg";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import ActionDropdown from "@components/ActionDropdown";
import EditFranchise from "./Components/EditFranchise";
import { useForm } from "react-hook-form";
import { ModalDelete } from "@components/Modal";
import Pagination from "@components/Pagination";
import ReactSwitch from "react-switch";
import { Link, useNavigate } from "react-router-dom";
import handleClickOutside from "@components/handleClickOutside";
const FrenchiseManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditId, setShowEditId] = useState();
  const [showSubTask, setShowSubTask] = useState(false);
  const [loading, setLoading] = useState(true);
  const [franchises, setFranchises] = useState([]);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [singleFranchises, setSingleFranchises] = useState({});
  const { setValue } = useForm();
  const [totalRecords, setTotalRecords] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [addEditUsers, setAddEditUsers] = useState(true);
  const [permissions, setPermissions] = useState({});
  const [editId, setEditId] = useState();

  const dropdownRef = useRef(null);
  handleClickOutside(dropdownRef, () => setOpenDropdown(false));

  const navigate = useNavigate("");

  const handleEdit = (editId) => {
    setEditId(editId);
    setShowEditModal(true);
  };
  const columns = [
    {
      name: "ID",
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => <span>{row.id}</span>,
    },

    {
      name: "Franchise",
      selector: (row) => row.name,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="flex items-center">
            <div
              onClick={() => {
                navigate("/franchise-profile");
              }}
              className="text-sm cursor-pointer "
            >
              {/* {row.franchise} */}
              {row.name}
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Location",
      minWidth: "250px",
      selector: (row) => row.address,
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          <ReactSVG src={LocationIcon} /> {row?.address}
        </span>
      ),
    },

    {
      name: "Number of Detailers",
      minWidth: "50px",
      selector: (row) => row.service,
      cell: (row) => <span>200</span>,
    },

    {
      name: "Earning",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$0.0</span>,
    },

    {
      name: "Status",
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
      name: "Permissions",
      selector: (row) => row.status,
      minWidth: "130px",
      cell: (row) => (
        <ReactSwitch
          checked={permissions[row.id] || false}
          onChange={(checked) =>
            setPermissions((prev) => ({ ...prev, [row.id]: checked }))
          }
          checkedIcon={false}
          uncheckedIcon={false}
        />
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
          <div>
            <ActionDropdown
              setOpenDropdown={setOpenDropdown}
              openDropdown={openDropdown}
              rowId={row.id}
              setShowEditModal={setShowEditModal}
              setShowEditId={setShowEditId}
              showEditId={showEditId}
              handleDelete={deleteFrenchise}
              removeEdit={true}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      ),
    },
  ];

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

    // function handleClickOutside(event) {
    //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //     setOpenDropdown(null);
    //     // setTimeout(() => setOpenDropdown(null), 100); // small delay
    //   }
    // }

    // document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
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
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }v1/franchise/${showEditId}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response?.success) {
        // setLoading(false);
        setSingleFranchises(response?.payload);
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
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="md:!text-[32px] !text-[28px]  font-semibold md:mb-0 mb-2">
            Franchise Management
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:w-[600px]">
            <CommonInput
              placeholder="search by city, plan, activity"
              showImg={true}
              inputClass="w-full"
            />

            <PrimaryButton
              btnText="Add a franchise"
              btnClass="bg-[#003CA6] rounded-xl text-white px-[18px] py-[12px] w-full sm:max-w-[210px]"
              btnTextClass="text-[16px]"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={franchises}
          pagination
          // className="!overflow-x-clip !overflow-y-visible"
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
            editId={editId}
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

export default FrenchiseManagement;
