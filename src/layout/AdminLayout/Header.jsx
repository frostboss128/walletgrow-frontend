import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/usersApiSlice";
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
import { toast } from "sonner";

const Header = ({ onNavChange }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("users");

  useEffect(() => {
    if (location?.pathname) setValue(location.pathname.slice(7));
  }, [location]);

  const [logoutApiCall, { isLoading: logoutLoading }] = useLogoutMutation();

  const onValueChange = async value => {
    if (value === "logout") {
      await logoutApiCall();
      dispatch(logout());
      return toast.success(`logged out`);
    }
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
              <AvatarImage src="/images/user.svg" alt="user avatar" />
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-28">
            <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
              <DropdownMenuRadioItem value="users">Users</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="recharges">Recharges</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="withdraws">Withdraws</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="history">History</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="config">Config</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="logout">Logout</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
