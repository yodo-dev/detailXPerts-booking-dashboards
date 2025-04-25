import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
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

// import White

const FeedSupport: React.FC = () => {
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
      issue: "issue",
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
    },
  ];

  const [openModal, setModalOpen] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [hoveredBug, setHoveredBug] = useState(false);
  const [hoveredSuggestion, setHoveredSuggestion] = useState(false);
  const [hoveredSurvey, setHoveredSurvey] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(false);

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
    { key: "recomended_app", label: "Will you recommend this app to your friends?" },
    { key: "helpfull_app", label: "How helpful this app for you?" },
    { key: "helpfull_app", label: "How helpful this app for you?" },
    { key: "user_suggestions", label: "Users Suggestion?" },
    




  ];

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
              <Table
                user={true}
                issueTd={true}
                tableData={tableData}
                incidentTh={true}
                action={true}
              />
            ) : tabs == 1 ? (
              <Table
                user={true}
                category={true}
                suggestions={true}
                tableData={tableData2}
                action={true}
              />
            ) : tabs == 2 ? (
              <Table
                user={true}
                appHelpfull={true}
                recommendapp={true}
                howHelpfullApp={true}
                userSuggestion={true}
                tableData={tableData3}
                action={false}
                idNot={true}
                // action={true}
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
