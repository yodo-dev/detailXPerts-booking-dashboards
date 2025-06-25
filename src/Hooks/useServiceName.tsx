// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { apiGetFreelancers } from '../Api/apiFreelancers';
import { apiGetServices } from '../Api/apiServices';

export const useGetServiceName = (serviceName = {}) => {
  return useQuery({
    queryKey: ['useGetServiceName', serviceName], // this enables caching per set of params
    queryFn: () => apiGetServices(serviceName),
  });
};
