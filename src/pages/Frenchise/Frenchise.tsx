import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import AddFranchise from "./Components/AddFranchise";

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

  const [showModal, setShowModal] = useState(true);

  const tableData = [
    { key: "id", label: "ID" },
    { key: "franchise", label: "Franchise" },
    { key: "location", label: "Location" },
    { key: "no_detailer", label: "Number of  Detailers" },
    { key: "earning", label: "Earning" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto bg-white">
        <div className="flex items-center justify-between mb-7">
          <h2>Frenchise Management</h2>

          <div className="flex items-center gap-4 ml-auto">
            <CommonInput
              placeholder="search by city, plan, activity"
              showImg={true}
            />
            <PrimaryButton
              btnText="Add a franchise"
              btnClass="bg-[#003CA6] rounded-xl text-white px-[18px] py-[12px] !w-[235px]"
              btnTextClass="text-[16px]"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </div>
        {/* <Table  /> */}
        <Table
          id={true}
          franchise={true}
          statusTh={true}
          locationTh={true}
          numberDetailsTh={true}
          earningTh={true}
          tableData={tableData}
          action={true}
          setShowModal={setShowModal}
        />

        {showModal ? <AddFranchise setShowModal={setShowModal} /> : ""}

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

export default FrenchiseManagement;
