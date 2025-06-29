// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { apiGetFreelancers } from '../Api/apiFreelancers';
import { apiGetServices } from '../Api/apiServices';
import { apiGetPackages } from '../Api/apiCreateService';

export const usePackagesGet = (serviceName = {}) => {
  return useQuery({
    queryKey: ['usePackagesGet', serviceName], // this enables caching per set of params
    queryFn: () => apiGetPackages(serviceName),
  });
};
