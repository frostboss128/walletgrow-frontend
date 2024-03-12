import React, { useState } from "react";
import { clsx } from "clsx/lite";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AdminLayout = () => {
  const [nav, setNav] = useState(false);

  const onNavChange = (e) => setNav(!nav);

  return (
    <>
      <>
        {/* <aside className={clsx("h-screen px-2 py-4 bg-primary text-gray-50", nav)}>
          <Navbar />
        </aside> */}
        <main className="h-screen relative">
          <Header onNavChange={onNavChange} />
          <div className="overflow-x-auto h-[calc(100vh-104px)] min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)]">
            <Outlet />
          </div>
          <Footer />
        </main>
      </>
    </>
  );
};

export default AdminLayout;
