import axios from "axios";
import React from "react";



export const ApiResetPassword = async (data) => {

  const otpId = JSON.parse(localStorage.getItem("OtpId"));
  const token = localStorage.getItem("accessToken"); // make sure your token is stored here
  console.log("Yessss",token)

  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/auth/reset/${otpId}`;

  const response = await axios.post(BASE_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });


  return response.data.payload.records;
};
