import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle, Headset, ArrowUpRightSquare, CheckCircle, CreditCard } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const Withdraw = () => {
  return (
    <div className="space-y-6">
      <div className="bg-primary text-gray-200 space-y-2">
        <div className="bg-primary text-primary-foreground px-4 py-2 text-center relative">
          <Link to="/account">
            <ArrowLeftCircle className="absolute top-3 left-3" />
          </Link>
          <h1 className="text-2xl font-bold">Withdraw</h1>
          <Link to="/account/service" className="flex flex-row space-x-2 absolute right-3 top-3">
            <span>Support</span>
            <Headset />
          </Link>
        </div>

        <div className="flex flex-row justify-between items-center px-4">
          <div>
            <div>Wallet2</div>
            <div>Score: {"0"}</div>
          </div>
          <div>
            <div>Total Coin: {"0"}</div>
            <div>COIN: {"35.35"}</div>
          </div>
        </div>

        <div className="flex flex-row px-4 space-x-2 max-sx:text-sm items-center">
          <img src="/images/account/wallet.svg" alt="wallet" width={40} />
          <div className="flex-grow">
            <div>X-Wallet Total Coin</div>
            <div>Daily reward upto 2.3%</div>
          </div>
          <div>
            <div>COIN: $18.711</div>
            <div className="flex flex-row space-x-2">
              <Link to="/account/in">
                <Button size="sm" className="bg-cyan-600 w-full">
                  IN
                </Button>
              </Link>
              <Link to="/wallet/out">
                <Button size="sm" className="bg-cyan-600 w-full">
                  OUT
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-row justify-between space-x-2 max-sx:text-sm items-center">
          <div>Minimum X-wallet transfer 20 coins</div>
          <Link to="/wallet">
            <Button size="sm" className="bg-cyan-600">
              X-Wallet
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 py-1 text-center border-t-2 divide-x-2">
          <Link to="/account/recharge">
            <div className="flex flex-row space-x-1 justify-center items-center">
              <ArrowUpRightSquare />
              <span>Recharge</span>
            </div>
          </Link>
          <div className="flex flex-row space-x-1 justify-center items-center">
            <CheckCircle />
            <span>Withdraw</span>
          </div>
          <Link to="/account/bankcard">
            <div className="flex flex-row space-x-1 justify-center items-center">
              <CreditCard />
              <span>Bank Card</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-2 divide-y-2">
        <div className="px-4 pb-3 flex flex-row justify-between items-center space-x-2">
          <span>COIN</span>
          <Input type="number" value={"18.1818"} disabled />
          <Button type="submit" size="sm">
            Refresh
          </Button>
        </div>
        <div className="p-3">
          <div>Enter Your TRC20 address</div>
          <Input placeholder="Select your payment method" />
        </div>
        <div className="p-3">
          <div>Withdraw Coin :</div>
          <Input type="number" placeholder="Enter withdraw amount" />
        </div>
      </div>

      <div className="px-6 py-2 font-bold text-red-500">
        <h3 className="text-xl underline underline-offset-4">Withdrawal rules :</h3>
        <ol className="list-decimal list-outside pl-4 mt-2">
          <li>Minimum withdrawal amount is 10 USDT or 100 TRX.</li>
          <li>Withdrawal can be request 24 hours at any time.</li>
          <li>Arrival time 5 ~ 55 minutes (Maximum 24 hours).</li>
          <li>
            Handling fee is 10% for 10$~99$ a month income .15% fee for above 100$~ 250$ a month income . 20% fee for
            above 251$ a month income .
          </li>
          <li>Withdrawal Limit for USDT is 5 ~ 10,000. Limit for TRX is 50 ~ 1,00,000 per day.</li>
        </ol>
      </div>
    </div>
  );
};

export default Withdraw;
