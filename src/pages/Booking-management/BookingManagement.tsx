import MainLayout from "@layouts/MainLayout";
import React from "react";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";

const BookingManagement: React.FC = () => {


  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto bg-white">
        <div className="flex items-center justify-between mb-7">
          <h2>Bookings Management</h2>
          <CommonInput placeholder="Search" showImg={true} />
        </div>



        <Table franchise={true} detailer={true} customer={true} dateTab={true} serviceTh={true} vehicleTh={true} earningTh={true} statusTh={true} />

        {/* Pagination */}
        {/* <div className="flex justify-between items-center mt-4 !text-[14px] !font-medium text-[#414651]">
          <p>Showing 1 to 10 of 200 entries</p>
          <div className="space-x-2">
            <button className="px-3 py-1 rounded-md">Prev</button>
            <button className="px-3 py-1 bg-[#003CA6] text-white rounded-md">
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

export default BookingManagement;
