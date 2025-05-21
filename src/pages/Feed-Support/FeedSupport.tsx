import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import BugIcon from "../../assets/svgs/bug.svg";
import BulbIcon from "../../assets/svgs/bulb.svg";
import UsersList from "../../assets/svgs/users-list.svg";
import BlackbubIcon from "../../assets/svgs/blackBug.svg";
import WhiteUser from "../../assets/svgs/WhiteUserList.svg";
import whiteBuld from "../../assets/svgs/whiteBulb.svg";
import WhiteStart from "../../assets/svgs/WhiteStar.svg";
import BlackStar from "../../assets/svgs/BlackStart.svg";
import ReviewsSection from "./Components/ReviewsSection";
import MenuIcon from "@assets/svgs/menu.svg";
import { Menu, X } from "lucide-react";
import DataTable from "react-data-table-component";
import { customStyles } from "@components/CustomStylesTable";
import { apiGet } from "../../Auth/Auth";
import dayjs from "dayjs";
import { useUsers } from "../../Hooks/useBugs";
import Logo from "@assets/svgs/logo1.svg";
import DotsIcon from "../../assets/svgs/dots.svg";
import ActionDropdown from "@components/ActionDropdown";
import BugsModal from "./Components/BugsModal";
// import White
import BugsData from "./Components/BugsData";
import { bugsSupport } from "../../Api/bugsSupport";
// import { SuggestionSupport } from "Api/SuggestionSupport";

const FeedSupport: React.FC = () => {
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef();
  // const { data: bugsSupport, isLoading, isError, error } = useUsers();
  // const {
  //   data: bugsSupport,
  //   isLoading,
  //   isError,
  //   error,
  // } = useUsers({ type: "BUG" });

  // const {
  //   data: suggestionsSupport,
  //   isLoading,
  //   isError,
  //   error,
  // } = useUsers({ type: "BUG" });

  // const {
  //   data: SurveySupport,
  //   // isLoading,
  //   // isError,
  //   // error,
  // } = useUsers({ type: "BUG" });

  const {
    data: suggestionsSupport,
    isLoading: isLoadingSuggestions,
    isError: isErrorSuggestions,
    error: errorSuggestions,
  } = useUsers({ type: "SUGGESTION" });

  const {
    data: bugsSupport,
    isLoading: isLoadingBug,
    isError: isErrorBug,
    error: errorBug,
  } = useUsers({ type: "BUG" });

  // const {
  //   data: surveySupport,
  //   isLoading: isLoadingSurvey,
  //   isError: isErrorSurvey,
  //   error: errorSurvey,
  // } = useUsers({ type: "SURVEY" });

  const [openDropdown, setOpenDropdown] = useState(null);

  // console.log("bugsxxxxxxxxx", users);

  // const rows = [
  //   {
  //     id: "001",
  //     franchise: "Vaclucia Motors",
  //     detailer: {
  //       name: "Ahmad Septiwan",
  //       avatar: "https://i.pravatar.cc/40?img=1",
  //     },
  //     customer: "Kaiya Botar",
  //     date: "04-05-2025",
  //     service: "Car Wash",
  //     vehicle: "Phoenix",
  //     earning: "$0.00",
  //     status: "Completed",
  //     issue: "issue",
  //   },
  //   {
  //     id: "002",
  //     franchise: "DreamDrive Automobiles",
  //     detailer: {
  //       name: "Erin Vetrov",
  //       avatar: "https://i.pravatar.cc/40?img=2",
  //     },
  //     customer: "Alfredo Soris",
  //     date: "04-05-2025",
  //     service: "Detailing",
  //     vehicle: "Cobra",
  //     earning: "$0.00",
  //     status: "In Progress",
  //   },
  //   {
  //     id: "003",
  //     franchise: "Healthride Vehicles",
  //     detailer: {
  //       name: "Giancu Batrom Bachman",
  //       avatar: "https://i.pravatar.cc/40?img=3",
  //     },
  //     customer: "Lincoln Gusae",
  //     date: "04-05-2025",
  //     service: "Detailing",
  //     vehicle: "Raptor",
  //     earning: "$0.00",
  //     status: "In Progress",
  //   },
  //   {
  //     id: "004",
  //     franchise: "Biwered Motors",
  //     detailer: {
  //       name: "Alfredo Rihidl Madsson",
  //       avatar: "https://i.pravatar.cc/40?img=4",
  //     },
  //     customer: "Aspen Schieffer",
  //     date: "04-05-2025",
  //     service: "Detailing",
  //     vehicle: "Vortex",
  //     earning: "$20.00",
  //     status: "Completed",
  //   },
  //   {
  //     id: "005",
  //     franchise: "Fantasy Auto Group",
  //     detailer: {
  //       name: "Tachiona Curtis",
  //       avatar: "https://i.pravatar.cc/40?img=5",
  //     },
  //     customer: "Alfredo Philips",
  //     date: "04-05-2025",
  //     service: "Detailing",
  //     vehicle: "Stingray",
  //     earning: "$0.00",
  //     status: "Canceled",
  //   },
  // ];

  const token = localStorage.getItem("token");

  const getBugs = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setFranchises(response.payload.records);
        // setTotalRows(response.payload.totalRecords);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getBugs();
  }, []);

  const [openModal, setModalOpen] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [hoveredBug, setHoveredBug] = useState(false);
  const [hoveredSuggestion, setHoveredSuggestion] = useState(false);
  const [hoveredSurvey, setHoveredSurvey] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(false);
  const [viewModal, setViewModal] = useState(true);

  const tableData = [
    { key: "user", label: "User" },
    { key: "category", label: "Category" },
    { key: "issue", label: "Issue" },
    { key: "incident", label: "Incident" },

    { key: "action", label: "Action" },
  ];

  const tableData2 = [
    { key: "user", label: "User" },
    { key: "category", label: "Category" },
    { key: "suggestion", label: "Suggestion" },

    { key: "action", label: "Action" },
  ];

  const tableData3 = [
    { key: "user", label: "User" },
    { key: "app_helpfull", label: "Is this app helpful for you?" },
    {
      key: "recomended_app",
      label: "Will you recommend this app to your friends?",
    },
    { key: "helpfull_app", label: "How helpful this app for you?" },
    { key: "helpfull_app", label: "How helpful this app for you?" },
    { key: "user_suggestions", label: "Users Suggestion?" },
  ];

  const columns1 = [
    {
      name: "User",
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
              // onClick={() => {
              //   setShowSubTask(true);
              //   setShowEditId(row?.id);
              // }}
            >
              {/* {row.franchise} */}
              Santa Clause
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>user@gmail.com</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Category",
      minWidth: "150px",
      selector: (row) => row.category,
    },

    {
      name: "Issue",
      minWidth: "50px",
      selector: (row) => row.issue,
    },

    {
      name: "Incident",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>Car Accident</span>,
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
              viewOnly={true}
              // setShowEditModal={setShowEditModal}
              // setShowEditId={setShowEditId}
              // showEditId={showEditId}
              // handleDelete={deleteFrenchise}
            />
          </div>
        </div>
      ),
    },
  ];

  const columns2 = [
    {
      name: "User",
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
              // onClick={() => {
              //   setShowSubTask(true);
              //   setShowEditId(row?.id);
              // }}
            >
              {/* {row.franchise} */}
              Santa Clause
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>user@gmail.com</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Category",
      minWidth: "150px",
      selector: (row) => row.category,
    },

    {
      name: "Suggestion",
      minWidth: "50px",
      selector: (row) => row.issue,
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
              viewOnly={true}
              // setShowEditModal={setShowEditModal}
              // setShowEditId={setShowEditId}
              // showEditId={showEditId}
              // handleDelete={deleteFrenchise}
            />
          </div>
        </div>
      ),
    },
  ];

  const columns3 = [
    {
      name: "User",
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
              // onClick={() => {
              //   setShowSubTask(true);
              //   setShowEditId(row?.id);
              // }}
            >
              {/* {row.franchise} */}
              Santa Clause
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>user@gmail.com</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Is this app helpful for you?",
      minWidth: "50px",
      selector: (row) => row.category,
      cell: () => <span>Yes</span>,
    },

    {
      name: "Will you recommend this ap to your friends?",
      minWidth: "50px",
      selector: (row) => row.issue,
      cell: () => <span>Yes</span>,
    },

    {
      name: "How helpful this app for you?",
      minWidth: "50px",
      selector: (row) => row.issue,
      cell: () => <span>Yes</span>,
    },

    {
      name: "How helpful this app for you?",
      minWidth: "50px",
      selector: (row) => row.issue,
      cell: () => <span>Yes</span>,
    },

    {
      name: "Users Suggestion?",
      minWidth: "50px",
      selector: (row) => row.issue,
      cell: () => <span>Yes</span>,
    },
  ];

  const handleViewModal = () => {
    setViewModal(true);
  };

  console.log("-----", openModal);
  return (
    <MainLayout>
      <div className=" default_container p-0 overflow-x-auto bg-white ">
        <div className="flex items-center justify-between mb-7">
          <h2 className="!text-[24px] font-medium lg:!text-[32px] flex justify-center items-center gap-3">
            {" "}
            <ReactSVG
              className="block lg:hidden "
              onClick={() => setModalOpen(!openModal)}
              src={MenuIcon}
            />
            Feedback & Support
          </h2>
          {/* <CommonInput placeholder="Search" showImg={true} /> */}
        </div>
        <div className=" flex justify-start items-start gap-10  ">
          <div
            className={`
              flex flex-col bg-white z-40 w-[290px] 
              p-[20px]
              lg:relative lg:translate-x-0 lg:transition-none
              fixed top-0 h-full left-0 transition-transform duration-300 ease-in-out
               ${openModal ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div
              className={` ${
                openModal ? "" : "hidden"
              } flex justify-end cursor-pointer`}
              onClick={() => setModalOpen(false)}
            >
              <X />
            </div>

            <div className="!mt-[100px] lg:!mt-[0]">
              <button
                onClick={() => setTabs(0)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
                className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[100%] focus:outline-none
                                ${
                                  tabs === 0
                                    ? "bg-[#003CA6] text-white"
                                    : "bg-white text-black"
                                }`}
              >
                <ReactSVG
                  className="fill-current"
                  width={24}
                  src={tabs == 0 ? BugIcon : BlackbubIcon}
                />
                Bugs
              </button>

              <button
                onClick={() => setTabs(1)}
                onMouseEnter={() => setHoveredSuggestion(true)}
                onMouseLeave={() => setHoveredSuggestion(false)}
                type="button"
                className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[100%] focus:outline-none
                                ${
                                  tabs === 1
                                    ? "bg-[#003CA6] text-white"
                                    : "bg-white text-black"
                                }`}
              >
                <ReactSVG
                  className="fill-current "
                  width={24}
                  src={tabs == 1 ? whiteBuld : BulbIcon}
                />
                Suggestions
              </button>

              <button
                onClick={() => setTabs(2)}
                onMouseEnter={() => setHoveredSurvey(true)}
                onMouseLeave={() => setHoveredSurvey(false)}
                type="button"
                className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[100%] focus:outline-none
                                ${
                                  tabs === 2
                                    ? "bg-[#003CA6] text-white"
                                    : "bg-white text-black"
                                }`}
              >
                <ReactSVG
                  className="fill-current text-black"
                  width={24}
                  src={tabs == 2 ? WhiteUser : UsersList}
                />
                Survey Feedback
              </button>

              <button
                onClick={() => setTabs(3)}
                onMouseEnter={() => setHoveredStar(true)}
                onMouseLeave={() => setHoveredStar(false)}
                type="button"
                className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[100%] focus:outline-none
                                ${
                                  tabs === 3
                                    ? "bg-[#003CA6] text-white"
                                    : "bg-white text-black"
                                }`}
              >
                <ReactSVG
                  className="fill-current text-black"
                  width={24}
                  src={tabs == 3 ? WhiteStart : BlackStar}
                />
                Rating & Starts
              </button>
            </div>
          </div>

          <div className="w-[100%]">
            {tabs == 0 ? (
              <>
                {/* <div className="absolute">
                <BugsModal />
              </div> */}

                <DataTable
                  columns={columns1}
                  customStyles={customStyles}
                  data={bugsSupport}
                  progressPending={loading}
                  // pagination
                  // paginationComponent={() => (
                  //   <Pagination
                  //     currentPage={currentPage}
                  //     totalRows={totalRows}
                  //     rowsPerPage={5}
                  //     onPageChange={handlePageChange}
                  //   />
                  // )}
                  // progressComponent={customL}
                />
                {/* {viewModal ? <BugsModal /> : ""} */}
              </>
            ) : tabs == 1 ? (
              <DataTable
                columns={columns2}
                customStyles={customStyles}
                data={suggestionsSupport}
                progressPending={loading}
                // pagination
                // paginationComponent={() => (
                //   <Pagination
                //     currentPage={currentPage}
                //     totalRows={totalRows}
                //     rowsPerPage={5}
                //     onPageChange={handlePageChange}
                //   />
                // )}
                // progressComponent={customL}
              />
            ) : tabs == 2 ? (
              <DataTable
                columns={columns3}
                customStyles={customStyles}
                data={bugsSupport}
                progressPending={loading}
                // pagination
                // paginationComponent={() => (
                //   <Pagination
                //     currentPage={currentPage}
                //     totalRows={totalRows}
                //     rowsPerPage={5}
                //     onPageChange={handlePageChange}
                //   />
                // )}
                // progressComponent={customL}
              />
            ) : tabs == 3 ? (
              <ReviewsSection />
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-between items-center mt-4 !text-[14px] !font-medium text-[#414651]">
                    <p>Showing 1 to 10 of 200 entries</p>
                    <div className="space-x-2">
                        <button className="px-3 py-1  rounded-md">Prev</button>
                        <button className="px-3 py-1  bg-[#003CA6] text-white rounded-md">
                            1
                        </button>
                        <button className="px-3 py-1  rounded-md">2</button>
                        <button className="px-3 py-1  rounded-md">3</button>
                        <button className="px-3 py-1  rounded-md">4</button>
                        <button className="px-3 py-1 text-[#003CA6] rounded-md">Next</button>
                    </div>
                </div> */}
      </div>
    </MainLayout>
  );
};

export default FeedSupport;
