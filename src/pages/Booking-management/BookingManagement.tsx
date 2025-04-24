import MainLayout from "@layouts/MainLayout";
import React from "react";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import { table } from "console";

const BookingManagement: React.FC = () => {
  const tableData = [
    { key: "id", label: "ID" },
    { key: "franchise", label: "Franchise" },
    { key: "detailer", label: "Detailer" },
    { key: "customer", label: "Customer" },
    { key: "date", label: "Date" },
    { key: "service", label: "Service" },
    { key: "vehicle", label: "Vehicle" },
    { key: "status", label: "Status" },
    { key: "earning", label: "Earning" },
  ];

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex lg:items-center md:flex-row flex-col justify-between mb-7">
          <h2 className="md:mb-0 mb-7">Bookings Management</h2>
          <div className="md:w-[366px]">
          <CommonInput placeholder="filter by franchise, rating, location" showImg={true} />
          </div>
        </div>

        <Table
          franchise={true}
          detailer={true}
          customer={true}
          dateTab={true}
          serviceTh={true}
          vehicleTh={true}
          earningTh={true}
          statusTh={true}
          tableData={tableData}
          action={false}
        />

 
        
      </div>
    </MainLayout>
  );
};

export default BookingManagement;
