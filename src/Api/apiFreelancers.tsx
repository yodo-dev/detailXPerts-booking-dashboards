import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const franchiseId = userInfo?.user?.franchise_id;


export const apiGetFreelancers = async (page) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user?role_id=5&page=${
    page ? page : ""
  }&limit=5`;

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload;
};


export const apiDeleteFreelancer = async (id) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/${id}`;

  const token = localStorage.getItem("token");

  const response = await axios.delete(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload;
};
