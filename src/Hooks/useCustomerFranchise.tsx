// src/hooks/useUsers.js
import { useQuery } from "react-query";
import { customerFranchise } from "../Api/apiCustomersFranchise";

export const useCustomerFranchise = (page) => {
  return useQuery({
    queryKey: ["useCustomerFranchise", page], // this enables caching per set of params
    queryFn: () => customerFranchise(page),
  });
};
