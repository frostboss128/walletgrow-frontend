import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Menu } from "lucide-react";

const Header = ({ onNavChange }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("users");

  const onValueChange = (value) => {
    if (value === "logout") return;
    setValue(value);
    navigate(value);
  };

  return (
    <header className="p-3 shadow-xl flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-2 items-center flex-grow text-sky-500 font-bold text-2xl">
        <Menu onClick={onNavChange} />
        <span>Welcome to WalletGrow admin dashboard</span>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="user img" />
              <AvatarFallback>WG</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-28">
            {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
              <DropdownMenuRadioItem value="users">Users</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="recharges">Recharges</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="withdraws">Withdraws</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="history">History</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="logout">Logout</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
