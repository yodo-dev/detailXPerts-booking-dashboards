// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { apiGetFreelancers } from '../Api/apiFreelancers';

export const useGetFreelancers = (params = {}) => {
  return useQuery({
    queryKey: ['apiGetFreelancers', params], // this enables caching per set of params
    queryFn: () => apiGetFreelancers(params),
  });
};
