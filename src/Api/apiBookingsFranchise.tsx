import axios from "axios";
import { data } from "react-router-dom";

export const getBookings = async (status) => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/booking?status=${status ? status : "PENDING"}`;
  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};

export const BookingChangeStatus = async (bookingId, formData) => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/booking/${bookingId}`;
  const token = localStorage.getItem("token");

  const response = await axios.put(
    BASE_URL,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    },
    
  );

  return response.data;
};


