// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { detailersFranchise } from '../Api/apiDetailersFranchise';

export const useDetailerFranchise = (page) => {
  return useQuery({
    queryKey: ['detailersFranchise', page], // this enables caching per set of params
    queryFn: () => detailersFranchise(page),
  });
};
