import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

const Header = () => {
  return (
    <header className="p-3 shadow-xl flex flex-row justify-between items-center">
      <div className="flex-grow text-sky-500 font-bold text-2xl">Welcome to WalletGrow admin dashboard</div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="user img" />
          <AvatarFallback>WG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
