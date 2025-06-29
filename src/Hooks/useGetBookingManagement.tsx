// src/hooks/useUsers.js
import { useQuery } from "react-query";
import { ApiGetBookingsManagement } from "../Api/apiBookingManagement";

export const useGetBookingManagement = (id,created_at) => {
  return useQuery({
    queryKey: ["useGetBookingManagement", id,created_at], // this enables caching per set of params
    queryFn: () => ApiGetBookingsManagement(id,created_at),
  });
};
