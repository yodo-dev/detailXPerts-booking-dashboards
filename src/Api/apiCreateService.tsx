import axios from "axios";

export const ApicreateService = async (data) => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/package`;
  const token = localStorage.getItem("token");

  const response = await axios.post(BASE_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      //   "Content-Type": "multipart/form-data",
    },

    // params: queryParams,
  });

  return response.data.payload.records;
};


export const apiGetPackages = async (serviceName) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/package`;

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};

