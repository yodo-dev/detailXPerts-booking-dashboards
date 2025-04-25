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

  const [showModal, setShowModal] = useState(false);

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
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="text-lg font-semibold md:mb-0 mb-2">Franchise Management</h2>

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

        {/* <Table  /> */}
        <Table
          id={true}
          franchise={true}
          locationTh={true}
          numberDetailsTh={true}
          statusTh={true}
          // locationTh={true}
          earningTh={true}
          tableData={tableData}
          action={true}
          setShowModal={setShowModal}
        />

        {showModal ? <AddFranchise setShowModal={setShowModal} title={"Edit Franchise"} /> : ""}

      </div>
    </MainLayout>
  );
};

export default FrenchiseManagement;
