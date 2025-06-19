// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { getRoles } from '../Api/apiRoles';
import { getPermissions } from '../Api/ApiPermissions';

export const usePermissions = (params = {}) => {
  return useQuery({
    queryKey: ['getPermissions', params], // this enables caching per set of params
    queryFn: () => getPermissions(),
  });
};
