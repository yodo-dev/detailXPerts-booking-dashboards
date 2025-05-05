import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
import Chevron from "../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import AddFranchise from "@pages/Frenchise/Components/AddFranchise";

const CustomersManagement: React.FC = () => {
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

  const tableData = [
    { key: "id", label: "ID" },
    { key: "customers", label: "Customers" },
    { key: "bookings", label: "Bookings" },
    { key: "last_booking", label: "Last Booking" },
    { key: "spending", label: "Spending" },
    // { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];
  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2>Customers Management</h2>
          <div className="md:w-[366px]">
            <CommonInput
              placeholder="filter by franchise, rating, location"
              showImg={true}
            />
          </div>
        </div>

        <Table
          id={true}
          customer={true}
          bookingth={true}
          lastBookingth={true}
          spendingth={true}
          // statusTh={true}
          tableData={tableData}
          action={true}
          setShowModal={setShowModal}
          view={"/customers-franchise"}
        />

        {showModal ? <AddFranchise setShowModal={setShowModal} /> : ""}
      </div>
    </MainLayout>
  );
};

export default CustomersManagement;
