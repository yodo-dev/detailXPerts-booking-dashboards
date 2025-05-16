import React from "react";
import axios from "axios";

export const apiGet = async (url, data, token) => {
  try {
    const response = await axios({
      url: url,
      method: "GET",
      params: data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {}
};

export const apiPost = async (url, data, token) => {
  try {
    const isFormData = data instanceof FormData;

    // const headers = {
    //   Authorization: `Bearer ${token}`,
    //   ...(isFormData ? {} : { "Content-Type": "application/json" }),
    // };

    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    };

    const response = await axios({
      url: url,
      method: "POST",
      data: data,
      headers: headers,
    });
    return response.data;
  } catch (error) {}
};

export const apiPut = async (url, data, token) => {
  try {
    const response = await axios({
      url: url,
      data: data,
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDelete = async (url, data, token) => {
  try {
    const response = await axios({
      url: url,
      data: data,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
