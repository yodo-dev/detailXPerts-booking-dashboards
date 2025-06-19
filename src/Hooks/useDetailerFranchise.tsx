// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { detailersFranchise, getDetailerSingle } from '../Api/apiDetailersFranchise';

export const useDetailerFranchise = (page) => {
  return useQuery({
    queryKey: ['detailersFranchise', page], // this enables caching per set of params
    queryFn: () => detailersFranchise(page),
  });
};


export const useGetSingleDetailer = (id) => {
  return useQuery({
    queryKey: ['getDetailerSingle', id], // this enables caching per set of params
    queryFn: () => getDetailerSingle(id),
  });
};
