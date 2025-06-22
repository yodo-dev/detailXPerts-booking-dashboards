// src/hooks/useUsers.js
import { useQuery } from "react-query";
import { bookingFranchise } from "../Api/BookingFranchise";
import { getBookings } from "../Api/apiBookingsFranchise";

export const useBookingFranchise = (id) => {
  return useQuery({
    queryKey: ["useBookingFranchise", id], // this enables caching per set of params
    queryFn: () => bookingFranchise(id),
  });
};

export const useBookingApiFranchise = (status) => {
  return useQuery({
    queryKey: ["getBookings", status], // this enables caching per set of params
    queryFn: () => getBookings(status),
  });
};
