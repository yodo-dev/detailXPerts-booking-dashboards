import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const franchiseId = userInfo?.user?.franchise_id;


export const apiGetVehicleTypes = async (page) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/vehicle-type`;

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};


