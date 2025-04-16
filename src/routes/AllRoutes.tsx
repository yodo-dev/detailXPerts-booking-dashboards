import React from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { Route, Routes } from "react-router-dom";

const AllRoutes: React.FC = () => {
  return (
    <div>
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
