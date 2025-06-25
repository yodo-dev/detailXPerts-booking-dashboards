// src/hooks/useUsers.js
import { useQuery } from "react-query";
import { apiGetVehicleTypes } from "../Api/apiVehicleType";

export const useGetVehicleTypes = (params = {}) => {
  return useQuery({
    queryKey: ["useVehicleTypes", params], // this enables caching per set of params
    queryFn: () => apiGetVehicleTypes(params),
  });
};
