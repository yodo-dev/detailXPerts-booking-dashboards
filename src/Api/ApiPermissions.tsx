import axios from "axios";

export const getPermissions = async () => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/permission?type=Permissions`;
  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};
