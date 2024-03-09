import React from "react";
import { Outlet } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const MainLayout = () => {
  return (
    <>
      <main className="mb-24 sm:mb-8">
        <Outlet />
      </main>
      <MobileNavbar />
    </>
  );
};

export default MainLayout;
