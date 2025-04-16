import DashboardHeader from "@components/Dashboard-header/DashboardHeader";
import React from "react";
import { MainLayoutProps } from "./types";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <DashboardHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
