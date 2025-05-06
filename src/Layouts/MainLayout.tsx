import DashboardHeader from "@components/Dashboard-header/DashboardHeader";
import React from "react";
import { MainLayoutProps } from "./types";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#f8f9fa]">
      <DashboardHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
