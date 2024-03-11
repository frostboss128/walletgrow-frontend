import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 absolute bottom-0 bg-primary text-white w-full py-2">
      <div className="text-center">
        <h1>WalletGrow &copy;{new Date().getFullYear()}</h1>
      </div>
    </footer>
  );
};

export default Footer;
