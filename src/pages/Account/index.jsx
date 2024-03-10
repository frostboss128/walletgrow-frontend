import React from "react";
import { Link } from "react-router-dom";
import { Headset, ArrowUpRightSquare, CheckCircle, CreditCard, Rocket, MessageCircleQuestion } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";

const Account = () => {
  return (
    <div>
      <div className="bg-primary text-gray-200 space-y-2">
        <div className="bg-primary text-primary-foreground px-4 py-2 text-center relative">
          <h1 className="text-2xl font-bold">Account</h1>
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

        <div className="px-4">
          <Card className="bg-gray-800 text-inherit rounded-xl px-4 py-3 space-y-3">
            <div className="flex flex-row items-center justify-between">
              <div>Level</div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <Rocket />
                <span>Next Level</span>
                <MessageCircleQuestion />
              </div>
            </div>
            <div>
              <Progress value={30} className="" />
              <div>Total team recharge $0</div>
            </div>
            <div>
              <Progress value={40} className="" />
              <div>Total Team Member (0/0)</div>
            </div>
          </Card>
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
              <Link to="/wallet/in">
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
          <Link to="/account/withdraw">
            <div className="flex flex-row space-x-1 justify-center items-center">
              <CheckCircle />
              <span>Withdraw</span>
            </div>
          </Link>
          <Link to="/account/bankcard">
            <div className="flex flex-row space-x-1 justify-center items-center">
              <CreditCard />
              <span>Bank Card</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="space-y-4 mt-6 text-xs">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 text-center">
          <Link to="/account/messages">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/message.svg" alt="message" width={25} />
              </div>
              <div>Message</div>
            </div>
          </Link>
          <Link>
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/invite_friend.svg" alt="message" width={25} />
              </div>
              <div>Invite Friends</div>
            </div>
          </Link>
          <Link to="/account/inviteInfo">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/invite_info.svg" alt="message" width={25} />
              </div>
              <div>Invite Info</div>
            </div>
          </Link>
          <Link to="/account/commission">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/commission.svg" alt="message" width={25} />
              </div>
              <div>Commission Record</div>
            </div>
          </Link>
          <Link to="/account/finance_record">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/finance.svg" alt="message" width={25} />
              </div>
              <div>Finance Record</div>
            </div>
          </Link>
          <Link to="/account/recharge_record">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/recharge.svg" alt="message" width={25} />
              </div>
              <div>Recharge Record</div>
            </div>
          </Link>
          <Link to="/account/withdraw_record">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/withdraw_record.svg" alt="message" width={25} />
              </div>
              <div>Withdraw Record</div>
            </div>
          </Link>
        </div>

        <div className="h-5 bg-gray-100" />

        <div className="grid grid-cols-3 gap-4 px-4 text-center">
          <Link to="/account/password">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/password.svg" alt="message" width={25} />
              </div>
              <div>Password</div>
            </div>
          </Link>
          <Link to="/account/payPassword">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/pay_password.svg" alt="message" width={25} />
              </div>
              <div>Pay Password</div>
            </div>
          </Link>
          <Link to="/account/service">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/service.svg" alt="message" width={25} />
              </div>
              <div>Service</div>
            </div>
          </Link>
          <Link to="/">
            <div>
              <div className="flex justify-center items-center">
                <img src="/images/account/about.svg" alt="message" width={25} />
              </div>
              <div>About US</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
