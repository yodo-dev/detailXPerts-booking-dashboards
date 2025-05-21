// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { bugsSupport } from '../Api/bugsSupport';

export const useUsers = (params = {}) => {
  return useQuery({
    queryKey: ['users', params], // this enables caching per set of params
    queryFn: () => bugsSupport(params),
  });
};
