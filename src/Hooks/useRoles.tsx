// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { getRoles } from '../Api/apiRoles';

export const useRoles = (params = {}) => {
  return useQuery({
    queryKey: ['getRoles', params], // this enables caching per set of params
    queryFn: () => getRoles(),
  });
};
