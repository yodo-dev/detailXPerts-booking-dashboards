// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { bookingFranchise } from '../Api/BookingFranchise';

export const useBookingFranchise = (id) => {
  return useQuery({
    queryKey: ['useBookingFranchise', id], // this enables caching per set of params
    queryFn: () => bookingFranchise(id),
  });
};
