import axios from "axios";
import dayjs from "dayjs";

// export const ApiGetBookingsManagement = async (status, created_at) => {
//   const formattedStartDate = dayjs(created_at[0].startDate).format("YYYY-MM-DD");
//   const formattedEndDate = dayjs(created_at[0].endDate).format("YYYY-MM-DD");

// //   console.log(formattedDate,"kkkkkkkk")

//   let BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/booking?status=${
//     status ? status : ""
//   }`;
//   if (formattedStartDate) {
//     BASE_URL += `&start_date=${formattedStartDate}`;
//   }
//     if (formattedEndDate) {
//     BASE_URL += `&end_date=${formattedEndDate}`;
//   }
//   const token = localStorage.getItem("token");

//   const response = await axios.get(BASE_URL, {
//     headers: { Authorization: `Bearer ${token}` },
//     // params: queryParams,
//   });

//   return response.data.payload.records;
// };

export const ApiGetBookingsManagement = async (status, created_at) => {
  let formattedStartDate = "";
  let formattedEndDate = "";

  if (created_at) {
    formattedStartDate = dayjs(created_at[0]?.startDate).format("YYYY-MM-DD");
    formattedEndDate = dayjs(created_at[0]?.endDate).format("YYYY-MM-DD");
  }

  let BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/booking?status=${
    status ? status : ""
  }`;

  if (formattedStartDate && created_at) {
    BASE_URL += `&start_date=${formattedStartDate}`;
  }

  if (formattedEndDate && created_at) {
    BASE_URL += `&end_date=${formattedEndDate}`;
  }

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: ` Bearer ${token}` },
  });

  return response.data.payload.records;
};

//
export const ApiBookingStatusUpdate = async (
  bookingId,
  formData,
  created_at
) => {
  console.log("formData", formData);

  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/booking/${bookingId}`;
  const token = localStorage.getItem("token");

  const response = await axios.put(BASE_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
