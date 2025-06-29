import React, { Suspense } from "react";
import PublicRoutes from "./PublicRoutes";
import { adminRoutes, franchiseRoutes } from "./PrivateRoutes";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ProtectedRoutes, PublicProtectRoutes } from "./ProtectedRoutes";
import useUserInfoStore from "../Store/Store";

const AllRoutes: React.FC = () => {
  const { User } = useUserInfoStore();

  const routes = User?.role_id == 1 ? adminRoutes : franchiseRoutes;
  // const routes = User?.role_id == 1 ? franchiseRoutes : franchiseRoutes;

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Suspense fallback={"loading...."}> */}
        <Routes>
          {PublicRoutes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={<PublicProtectRoutes>{element}</PublicProtectRoutes>}
            />
          ))}
          {routes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={<ProtectedRoutes>{element}</ProtectedRoutes>}
            />
          ))}
        </Routes>
      {/* </Suspense> */}
    </div>
  );
};

export default AllRoutes;
