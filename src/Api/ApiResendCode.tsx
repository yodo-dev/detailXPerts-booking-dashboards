import axios from "axios";
import React from "react";

export const ApiResendCode = async (data) => {
    const otpId = JSON.parse(localStorage.getItem("OtpId"));
    console.log("opt-Id------------",otpId)

    // console.log("dat88a",data)
  const BASE_URL = `${import.meta.env.VITE_APP_API_URL}v1/auth/resendOTP/${otpId}?type=reset`;

  const response = await axios.get(BASE_URL, data);

  return response.data.payload.records;
};
