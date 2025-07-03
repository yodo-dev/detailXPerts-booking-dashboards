import axios from "axios";
import React from "react";

export const ApiVerifyOtp = async (data) => {
  const otpId = JSON.parse(localStorage.getItem("OtpId"));

  // console.log("dat88a",data)
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/auth/verify/${otpId}`;

  const response = await axios.post(BASE_URL, data);
  localStorage.setItem(
    "accessToken",
    response?.data?.payload?.updateRecord?.resetToken
  );

  return response.data.payload.records;
};
