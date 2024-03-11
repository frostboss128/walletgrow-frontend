import React from "react";
import { Link } from "react-router-dom";
import { Home, HandCoins, Wallet, ShieldCheck, CircleUserRound } from "lucide-react";
import clsx from "clsx/lite";

const MobileNavbar = () => {
  const currentPath = window.location.pathname.split("/")[1];

  return (
    <nav className="flex w-full min-w-full max-w-full fixed bottom-0 h-20 flex-col gap-4 p-1 text-white sm:hidden text-[9px] tx:text-xs sx:text-sm">
      <div className="bg-primary h-full rounded-xl px-4 py-2 flex flex-row w-full">
        <div className="flex flex-row w-full gap-4 justify-around items-center content-center text-center">
          <Link
            to="/"
            className={clsx("flex flex-col items-center content-center", currentPath === "" && "text-cyan-500")}
          >
            <Home />
            <span>Home</span>
          </Link>
          {/* <Link
            to="/project"
            className={clsx("flex flex-col items-center content-center", currentPath === "project" && "text-cyan-500")}
          >
            <HandCoins />
            <span>Project</span>
          </Link> */}
          <Link
            to="/wallet"
            className={clsx("flex flex-col items-center content-center", currentPath === "wallet" && "text-cyan-500")}
          >
            <Wallet />
            <span>X-Wallet</span>
          </Link>
          {/* <Link
            to="/insurance"
            className={clsx(
              "flex flex-col items-center content-center",
              currentPath === "insurance" && "text-cyan-500"
            )}
          >
            <ShieldCheck />
            <span>Insurance</span>
          </Link> */}
          <Link
            to="/account"
            className={clsx("flex flex-col items-center content-center", currentPath === "account" && "text-cyan-500")}
          >
            <CircleUserRound />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
