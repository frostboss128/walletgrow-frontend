import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-screen">
        <aside className="col-span-1 h-screen px-2 py-4 bg-primary text-gray-50">
          <Navbar />
        </aside>
        <main className="col-span-3 h-screen relative">
          <Header />
          <div className="p-4 overflow-y-auto h-[calc(100vh-104px)] min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)]">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
