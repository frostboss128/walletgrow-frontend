import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftCircle } from "lucide-react";
import WalletInfo from "../WalletInfo";
import { Button } from "../../../components/ui/button";

const NonPledge = () => {
  return (
    <div>
      <div className="flex flex-row w-full bg-cyan-400 px-6 py-2 font-bold text-lg text-gray-50">
        <Link to="/wallet">
          <div className="flex items-center gap-2">
            <ChevronLeftCircle />
            back
          </div>
        </Link>

        <div className="flex-grow text-center">
          <h2>Pledge</h2>
        </div>
      </div>
      <div className="px-4 sm:px-20 mt-8">
        <WalletInfo />

        <img src="/images/wallet/pledge-logo.svg" alt="pledge-logo" width="100%" height={100} className="mt-8" />

        <div className="flex w-full justify-center py-6">
          <Button variant="destructive" className="text-xl min-w-[225px]">
            INCOME PERIOD
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-1 justify-items-center pt-2 pb-6 font-bold">
          <div className="border-b-2 border-b-gray-800 border-dashed">INVESTMENT :</div>
          <div>$ 10.163</div>
          <div className="border-b-2 border-b-gray-800 border-dashed">DAILY INCOME :</div>
          <div>0.9 %</div>
          <div className="border-b-2 border-b-gray-800 border-dashed">TOTAL INCOME :</div>
          <div>189 %</div>
        </div>

        <div className="px-4">
          <div className="py-4">
            <h3 className="font-bold text-xl">Trading Starts in...</h3>
            <ul className="flex flex-row gap-4 justify-center font-semibold text-2xl mt-2">
              <li>
                <div>D</div>
                <div>D</div>
              </li>
              <li>
                <div>H</div>
                <div>H</div>
              </li>
              <li>
                <div>M</div>
                <div>M</div>
              </li>
              <li>
                <div>S</div>
                <div>S</div>
              </li>
            </ul>
          </div>

          <div className="py-2">
            <h3 className="font-bold text-xl">Trading Starts in...</h3>
            <ul className="flex flex-row gap-4 justify-center font-semibold text-2xl mt-2">
              <li>
                <div>D</div>
                <div>D</div>
              </li>
              <li>
                <div>H</div>
                <div>H</div>
              </li>
              <li>
                <div>M</div>
                <div>M</div>
              </li>
              <li>
                <div>S</div>
                <div>S</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center py-6">
          <Button className="text-xl min-w-[225px]">START NOW</Button>
        </div>

        <div className="px-4 font-bold pt-6 pb-2">
          <h3 className="text-xl">Rule for pledge :</h3>
          <ol className="text-red-500 list-decimal list-outside pl-4 mt-2">
            <li>Investment between $20 - $10,000.</li>
            <li>Daily net income 0.9 %</li>
            <li>Total net income 189 %.</li>
            <li>Investment period 210 days.</li>
            <li>Daily income can be withdrawn once per day</li>
            <li>If you reach high levels, you will earn incentive income upto 1.5% everyday from your investment.</li>
          </ol>
        </div>

        <div className="px-4 font-semibold pt-6 pb-2">
          <h3 className="text-xl font-bold">Questions and Answers :</h3>
          <ol className="list-decimal list-outside pl-4 mt-2 flex flex-col w-full gap-4">
            <li>
              <p className="font-bold">Why income is low?</p>
              <p className="mt-2">
                Because, Wallet Grow system is not a Ponzi scheme. Our team will invest your funds into various crypto
                fields to generate income. Our team should face time and risks management.
                <br />
                Even, Your 70% of funds only invest into various crypto fields to generate income. 20% of funds will
                set-up for as backup funds. Remaining, 10% of funds will buy an insurance for your investment.
                <br />
                Therefore income is low, at the same time there is no risks for invest X-wallet. You can earn money for
                long term.
              </p>
            </li>
            <li>
              <p className="font-bold">How to earn more?</p>
              <p className="mt-2">
                Wallet Grow developed an incentives income program for all users to earn more. You just need to develop
                a team and reach silver, gold, platinum, diamond and master leagues.
                <br />
                For example, your investment is 1000$ and you earned 1.3% daily from X-wallet (pledge mode). If you
                reach gold league, your daily income automatically will increase 1.3% to 1.8%.
              </p>
            </li>
          </ol>
        </div>

        <div className="px-4 font-semibold text-lg pt-6">
          <ol className="">
            <li>Bronze - (+0.1%)</li>
            <li>Silver - (+0.3%)</li>
            <li>Gold - (+0.5%)</li>
            <li className="mt-2">Platinum - (+0.8%)</li>
            <li>Diamond - (+1.1%)</li>
            <li className="mt-2">Master - (+1.2%) + 50$ weekly salary</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default NonPledge;
