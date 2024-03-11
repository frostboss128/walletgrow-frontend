import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotebookPen } from "lucide-react";
import { Button } from "../../components/ui/button";

const WalletInfo = ({ walletInfo }) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-full items-center p-6 min-w-[280px] text-gray-800 font-semibold border rounded-2xl shadow-cyan-100 shadow-2xl mt-2 bg-white">
      <div className="flex flex-col gap-1 w-full items-center">
        <h3 className="font-bold text-lg">X-Wallet Balance</h3>
        <h3 className="font-extrabold text-3xl">${walletInfo?.coin || 0}</h3>
        <h6 className="bg-slate-100 rounded px-6 py-1 text-sm sx:text-lg">
          Today income Coin.{" "}
          <span className="font-extrabold text-base sx:text-xl ml-2 text-sky-400">
            ${walletInfo?.invest / 210 || 0.0}
          </span>
        </h6>
      </div>
      <div className="flex flex-row w-full justify-around py-4 ">
        <div className="flex flex-col w-full items-center">
          <div>Month Income</div>
          <div className="font-bold text-lg">$4.766</div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div>Total Income</div>
          <div className="font-bold text-lg">$9.909</div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-around gap-10 items-center">
        <Link to="/wallet/out" className="w-full max-w-[200px]">
          <Button className="w-full">Out</Button>
        </Link>
        <Link to="/account/withdraw" className="w-full max-w-[200px]">
          <Button className="w-full">Withdraw</Button>
        </Link>
      </div>
      <Link to="/wallet/record" className="absolute top-4 right-4 text-cyan-700">
        <NotebookPen size={32} strokeWidth={3} />
      </Link>
    </div>
  );
};

export default WalletInfo;
