import React from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AllRoutes: React.FC = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {PublicRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
        {PrivateRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default AllRoutes;
