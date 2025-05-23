import axios from "axios";

export const ChatSupportGet = async () => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/chat/conversations`;
  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};

export const ChatSupportMessages = async (id) => {
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/chat/conversations/${id}/messages`;
  const token = localStorage.getItem("token");

  const response = await axios.get(BASE_URL, {
    headers: { Authorization: `Bearer ${token}` },
    // params: queryParams,
  });

  return response.data.payload.records;
};
