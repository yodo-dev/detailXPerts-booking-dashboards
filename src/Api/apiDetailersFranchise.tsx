import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const franchiseId = userInfo?.user?.franchise_id;

console.log("33333333333", userInfo.user);

export const detailersFranchise = async (page) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user?role_id=4&page=${
    page ? page : ""
  }&limit=5`;

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload;
};

export const detailerFranchiseAdd = async (formData) => {
  const BASE_URL = `${
    import.meta.env.VITE_APP_API_URL
  }v1/franchise/${franchiseId}/users`;
  const token = localStorage.getItem("token");

  const response = await axios.post(BASE_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.payload.records;
};

export const detailerFranchiseEdit = async (userId, formData, franchiseId) => {
  const BASE_URL = `${
    import.meta.env.VITE_APP_API_URL
  }v1/franchise/${franchiseId}/users/${userId}`;
  const token = localStorage.getItem("token");

  const response = await axios.put(BASE_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.payload.records;
};

export const detailerFranchiseDelete = async (id) => {
  //   const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/customers?page=${page}&limit=${5}`;
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/${id}`;

  const token = localStorage.getItem("token");

  const response = await axios.delete(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload;
};

export const getDetailerSingle = async (id) => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/user/${id}`;

  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload;
};
