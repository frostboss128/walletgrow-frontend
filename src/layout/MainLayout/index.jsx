import React from "react";
import { Outlet } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const MainLayout = () => {
  return (
    <>
      <main className="mb-20 sm:mb-0">
        <Outlet />
      </main>
      <MobileNavbar />
    </>
  );
};

export default MainLayout;
