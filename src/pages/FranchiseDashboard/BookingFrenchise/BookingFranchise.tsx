import MainLayout from "@layouts/MainLayout";
import React from "react";
import arrowDown from "../../../assets/svgs/arrow-down.svg";
import { ReactSVG } from "react-svg";
import VehicleCard from "@components/CarCards/CarCards";
import { apiGet } from "Auth/Auth";
import { useBookingFranchise } from "../../../Hooks/useBookingFranchise";
const BookingFranchise: React.FC = () => {
  // const getSingleFranchise = async () => {
  //   // setLoading(true);
  //   try {
  //     const url = `${
  //       import.meta.env.VITE_APP_API_URL
  //     }v1/franchise/${showEditId}`;

  //     const params = {};
  //     const response = await apiGet(url, params, token);
  //     if (response.success) {
  //       // setLoading(false);
  //       // setSingleFranchises(response.payload);
  //       // setValue("name", response.payload.name);
  //       // setValue("last_name", response.payload.last_name);
  //       // setValue("email", response.payload.email);
  //       // setValue("phone", response.payload.phone);
  //       // setValue("address", response.payload.address);
  //       // setValue("city", response.payload.city);
  //       // setValue("state", response.payload.state);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("Error :", error);
  //   }
  // };

  // useBookingFranchise
  const {
    data: FranchiseBooking,
    isLoading: isLoadingSuggestions,
    isError: isErrorSuggestions,
    error: errorSuggestions,
  } = useBookingFranchise(21);

  console.log("f11sssss11", FranchiseBooking);

  return (
    <MainLayout>
      <div className="default_container p-4 pt-0  overflow-x-auto ">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-7">
          <h2 className="!text-[32px] font-medium">All Bookings</h2>
          {/* <CommonInput placeholder="Search" showImg={true} /> */}
          <div className="flex gap-3">
            <div className=" relative">
              <select className="select-style !border !border-[#082042] pt-[16px] pb-[16px] rounded-xl !pe-[45px] ps-[15px]">
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
                <option value="">Ongoing Bookings</option>
              </select>

              <div className="absolute top-[30%] right-2">
                <ReactSVG src={arrowDown} />
              </div>
            </div>

            <div>
              <input
                className="select-style !border !border-[#082042] pt-[16px] pb-[16px] rounded-xl !pe-[15px] ps-[15px]"
                type="date"
                name=""
                id=""
              />
            </div>
          </div>
        </div>

        <div className="bg-white ">
          <div className="grid grid-cols-3 gap-[54px]">
           
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
              <VehicleCard
                vehicleName="Honda Civic"
                vehicleYear={2025}
                //   vehicleImage={carImage}
                fromLocation={{
                  title: "2972 Westheimer",
                  address: "Rd. Santa Ana, Illinois 85486",
                }}
                toLocation={{
                  title: "8502 Preston",
                  address: "Rd. Inglewood, Maine 98380",
                }}
                customer={{
                  name: "Darrell Steward",
                  company: "Mariene, LTD",
                  avatar:
                    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
                }}
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-3 gap-[54px] mt-[54px]">
            <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
              <VehicleCard
                vehicleName="Honda Civic"
                vehicleYear={2025}
                fromLocation={{
                  title: "2972 Westheimer",
                  address: "Rd. Santa Ana, Illinois 85486",
                }}
                toLocation={{
                  title: "8502 Preston",
                  address: "Rd. Inglewood, Maine 98380",
                }}
                customer={{
                  name: "Darrell Steward",
                  company: "Mariene, LTD",
                  avatar:
                    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
                }}
              />
            </div>

            <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
              <VehicleCard
                vehicleName="Honda Civic"
                vehicleYear={2025}
                fromLocation={{
                  title: "2972 Westheimer",
                  address: "Rd. Santa Ana, Illinois 85486",
                }}
                toLocation={{
                  title: "8502 Preston",
                  address: "Rd. Inglewood, Maine 98380",
                }}
                customer={{
                  name: "Darrell Steward",
                  company: "Mariene, LTD",
                  avatar:
                    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
                }}
              />
            </div>

            <div className="col-span-3 lg:col-span-1 flex justify-center items-center">
              <VehicleCard
                vehicleName="Honda Civic"
                vehicleYear={2025}
                fromLocation={{
                  title: "2972 Westheimer",
                  address: "Rd. Santa Ana, Illinois 85486",
                }}
                toLocation={{
                  title: "8502 Preston",
                  address: "Rd. Inglewood, Maine 98380",
                }}
                customer={{
                  name: "Darrell Steward",
                  company: "Mariene, LTD",
                  avatar:
                    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
                }}
              />
            </div>
          </div> */}
        </div>

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

export default BookingFranchise;
