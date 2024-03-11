import React from "react";
import { Link } from "react-router-dom";
import { Globe, Headset } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <div className="flex flex-row p-4">
      <Link to="/">
        <img src="/images/logo.svg" alt="logo" width={50} height={50} className="drop-shadow-[5px_5px_15px_#68c9fa]" />
      </Link>
      <div className="relative ml-auto"></div>

      <div className="flex items-center px-2 rounded-md bg-[#68c9fa] shadow-[5px_10px_20px_0_#68c9fa] my-1 mx-2">
        <Globe color="#ffffff" strokeWidth={3} />
      </div>
      <div className="flex items-center px-2 rounded-md bg-[#68c9fa] shadow-[5px_10px_20px_0_#68c9fa] my-1">
        <Headset color="#ffffff" strokeWidth={3} />
      </div>
    </div>
  );
};

export default Header;
