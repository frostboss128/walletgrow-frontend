import React from "react";
import { HelpCircle, CircleUserRound, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FutureCard from "./FutureCard";
import WalletInfo from "./WalletInfo";

const Wallet = () => {
  const dispatch = useDispatch();
  const { userinfo } = useSelector(({ auth }) => auth);

  return (
    <>
      <div className="relative px-4 sm:px-20">
        <div className="flex flex-row items-center gap-4 px-4 py-4 sm:py-6 font-bold text-gray-700 min-w-[240px] after:content-[''] after:h-80 after:sm:h-96 after:absolute after:bg-cyan-200 after:w-full after:left-0 after:-z-10 after:rounded-b-3xl after:sm:rounded-b-[75px]">
          <Link to="/account">
            <CircleUserRound size={40} />
          </Link>
          <div className="flex-grow text-md sx:text-xl">{userinfo?.username}</div>
          <div>LEVEL</div>
          <LogOut />
        </div>
        <WalletInfo />
      </div>
      <div className="px-4 sm:px-20">
        <div className="flex flex-row justify-between w-full items-center px-8 mt-12 sm:mt-20 font-bold text-2xl text-gray-600">
          <div>Index</div>
          <HelpCircle />
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-4 sm:gap-10">
          <Link to="/wallet/pledge">
            <FutureCard src="/images/wallet/pledge.svg" name="Pledge" description="0.9% - 2.3% Daily" type="Start" />
          </Link>
          <Link to="/wallet/nonpledge">
            <FutureCard
              src="/images/wallet/nonpledge.svg"
              name="Non-pledge"
              description="0.9% - 1.9% Daily"
              type="Start"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-between w-full items-center px-8 mt-10 font-bold  text-2xl text-gray-600">
          <div>Future</div>
          <HelpCircle />
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-4 sm:gap-16">
          <FutureCard
            src="/images/wallet/incentive.svg"
            name="Incentive"
            description="0.3% - 0.8% Daily"
            type="Unlock now"
          />
          <FutureCard src="/images/wallet/entertainment.svg" name="Entertainment" description="" type="Soon" />
          <FutureCard src="/images/wallet/savings.svg" name="Savings" description="" type="Soon" />
          <FutureCard src="/images/wallet/contact.svg" name="Contact" description="" type="Soon" />
        </div>
      </div>
    </>
  );
};

export default Wallet;
