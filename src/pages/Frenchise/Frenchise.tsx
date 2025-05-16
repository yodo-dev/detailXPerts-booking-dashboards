import MainLayout from "@layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useRef, useState } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import AddFranchise from "./Components/AddFranchise";
import SubTasks from "@components/SubTasks/SubTasks";
import DataTable from "react-data-table-component";
import { apiGet } from "../../Auth/Auth";
import SkeltonLoader from "@components/SkeltonLoader";
import { customStyles } from "@components/CustomStylesTable";
import Logo from "../../assets/svgs/logo1.svg";
import LocationIcon from "../../assets/svgs/location.svg";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import ActionDropdown from "@components/ActionDropdown";
import EditFranchise from "./Components/EditFranchise";
const FrenchiseManagement: React.FC = () => {
  const rows = [
    {
      id: "001",
      franchise: "Vaclucia Motors",
      detailer: {
        name: "Ahmad Septiwan",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      customer: "Kaiya Botar",
      date: "04-05-2025",
      service: "Car Wash",
      vehicle: "Phoenix",
      earning: "$0.00",
      status: "Completed",
      no_detailer: "9999",
    },
    {
      id: "002",
      franchise: "DreamDrive Automobiles",
      detailer: {
        name: "Erin Vetrov",
        avatar: "https://i.pravatar.cc/40?img=2",
      },
      customer: "Alfredo Soris",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Cobra",
      earning: "$0.00",
      status: "In Progress",
      no_detailer: "9999",
    },
    {
      id: "003",
      franchise: "Healthride Vehicles",
      detailer: {
        name: "Giancu Batrom Bachman",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      customer: "Lincoln Gusae",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Raptor",
      earning: "$0.00",
      status: "In Progress",
      no_detailer: "9999",
    },
    {
      id: "004",
      franchise: "Biwered Motors",
      detailer: {
        name: "Alfredo Rihidl Madsson",
        avatar: "https://i.pravatar.cc/40?img=4",
      },
      customer: "Aspen Schieffer",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Vortex",
      earning: "$20.00",
      status: "Completed",
      no_detailer: "9999",
    },
    {
      id: "005",
      franchise: "Fantasy Auto Group",
      detailer: {
        name: "Tachiona Curtis",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
      customer: "Alfredo Philips",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Stingray",
      earning: "$0.00",
      status: "Canceled",
      no_detailer: "9999",
    },
  ];

  const columns = [
    {
      name: "ID",
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
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              {row.first_name} {row.last_name}
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Location",
      minWidth: "250px",
      selector: (row) => row.location,
      cell: (row) => (
        <span className="flex justify-center items-center gap-[12px] text-[12px]">
          <ReactSVG src={LocationIcon} /> 2972 Westheimer Rd. Santa
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
  const dropdownRef = useRef(null);

  const th = [
    { key: "id", label: "ID" },
    { key: "franchise", label: "Franchise" },
    { key: "location", label: "Location" },
    { key: "no_detailer", label: "Number of Detailers" },
    { key: "earning", label: "Earning" },
    { key: "permissions", label: "Permissions" },
    { key: "action", label: "Action" },
  ];

  const token = localStorage.getItem("token");

  const getFranchise = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/?role_id=5`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setLoading(false);
        setFranchises(response.payload.records);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };

  // console.log("boooking", bookings);

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
  }, []);

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="text-lg font-semibold md:mb-0 mb-2">
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
          // sortIcon={<ReactSVG src={Chevron}/>}
          // sortIcon={<ChevronDown className="ml-1 text-gray-500" />}
          // defaultSortFieldId={1}
          // defaultSortAsc={true}
          progressPending={loading}
          progressComponent={customLoader}
        />

        {/* <Table  /> */}
        {/* <Table
          id={true}
          showCheck
          franchise={false}
          locationTh={true}
          statusTh={false}
          locationTh={true}
          // payMethodth={true}
          earningTh={true}
          numberDetailsTh={true}
          tableData={th}
          action={true}
          setShowModal={setShowModal}
          // data={storeData}
          permissions={true}
          setShowSubTask={setShowSubTask}
          Adminfranchise={true}
        /> */}

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
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={false}
            initialSlide={0}
          >
            <SwiperSlide>
              <div className="relative  h-full">
                {/* Close Button */}

                {/* SubTasks Content */}
                <SubTasks setShowSubTask={setShowSubTask} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <SubTasks /> */}
      </div>
    </MainLayout>
  );
};

export default FrenchiseManagement;
