import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProfileQuery } from "../../slices/usersApiSlice";
import { useGetWalletInfoQuery } from "../../slices/walletApiSlice";
import {
  Headset,
  ArrowUpRightSquare,
  CheckCircle,
  CreditCard,
  Rocket,
  MessageCircleQuestion,
  ChevronRight
} from "lucide-react";
import { Card } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "../../components/ui/dialog";
import { Coins } from "lucide-react";

const Account = () => {
  const { data: accountInfo, isLoading: accountInfoLoading, refetch: accountInfoRefetch } = useProfileQuery();
  const { data: walletInfo, isLoading: walletLoading, refetch: walletInfoRefetch } = useGetWalletInfoQuery();

  const inviteURL = "https://walletgrow.io/auth/register?invited=";

  const inviteLinkCopyHandler = async e => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(inviteURL + accountInfo.email);
      alert(`The invite link has been copied successfully:\n` + inviteURL + accountInfo.email);
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <>
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
            <div>{accountInfo?.username}</div>
            <div>Score: {"0"}</div>
          </div>
          <div className="text-right">
            <div className="flex flex-row items-center space-x-2 float-right">
              <span>Total Coin</span>
              <Coins />
            </div>
            <div className="font-bold">COIN: {accountInfo?.coin || 0}</div>
          </div>
        </div>

        {/* <div className="px-4">
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
        </div> */}

        <div className="flex flex-row px-4 space-x-2 max-sx:text-sm items-center">
          <img src="/images/account/wallet.svg" loading="lazy" alt="wallet" width={40} />
          <div className="flex-grow">
            <div>X-Wallet Total Coin</div>
            <div>Daily reward upto 2.3%</div>
          </div>
          <div className="text-right">
            <div className="font-bold">COIN: ${walletInfo?.coin || 0}</div>
            <div className="flex flex-row justify-end space-x-2">
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
          <Link to="/account/withdraw">
            <div className="flex flex-row space-x-1 justify-center items-center">
              <CheckCircle />
              <span>Withdraw</span>
            </div>
          </Link>
          <div className="flex flex-row space-x-1 justify-center items-center">
            <CreditCard />
            <span>Bank Card</span>
          </div>
        </div>
      </div>

      <div className="space-y-8 py-4 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y shadow-md rounded-md bg-gray-100">
          <div className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/message.svg" loading="lazy" alt="message" width={30} />
            <div className="flex-grow">Message</div>
            <ChevronRight />
          </div>
          <Link to="/account/invited_friends" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/invite_friend.svg" loading="lazy" alt="invite_friend" width={30} />
            <div className="flex-grow">Invited Friends</div>
            <ChevronRight />
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-row w-full space-x-2 text-lg items-center p-2">
                <img src="/images/account/invite_info.svg" loading="lazy" alt="invite_info" width={30} />
                <div className="flex-grow">Invite Info</div>
                <ChevronRight />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[320px]">
              <DialogHeader className="overflow-hidden space-y-2">
                <DialogTitle className="truncate space-y-2">Invited Info</DialogTitle>
                <DialogDescription>You can click the qr code to copy the link.</DialogDescription>
              </DialogHeader>
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">QR Code</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid place-content-center" onClick={inviteLinkCopyHandler}>
                <img
                  src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=inviteURL${accountInfo?.email}`}
                  loading="lazy"
                  alt="invite info qr code"
                  width={200}
                  height={200}
                />
              </div>
              <div className="line-clamp-2">{`${inviteURL}${accountInfo?.email}`}</div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Link to="/account/commission_record" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/commission.svg" loading="lazy" alt="invite_info" width={30} />
            <div className="flex-grow">Commission Record</div>
            <ChevronRight />
          </Link>
          <Link to="/account/finance_record" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/finance.svg" loading="lazy" alt="finance" width={30} />
            <div className="flex-grow">Finance Record</div>
            <ChevronRight />
          </Link>
          <Link to="/account/recharge_record" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/recharge.svg" loading="lazy" alt="recharge" width={30} />
            <div className="flex-grow">Recharge Record</div>
            <ChevronRight />
          </Link>
          <Link to="/account/withdraw_record" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/withdraw_record.svg" loading="lazy" alt="withdraw record" width={30} />
            <div className="flex-grow">Withdraw Record</div>
            <ChevronRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y shadow-md rounded-md bg-gray-100">
          <Link to="/account/withdraw_record" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/password.svg" loading="lazy" alt="password" width={30} />
            <div className="flex-grow">Password</div>
            <ChevronRight />
          </Link>
          <Link to="/account/service" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/service.svg" loading="lazy" alt="service" width={30} />
            <div className="flex-grow">Service</div>
            <ChevronRight />
          </Link>
          <Link to="/" className="flex flex-row w-full space-x-2 text-lg items-center p-2">
            <img src="/images/account/about.svg" loading="lazy" alt="about" width={30} />
            <div className="flex-grow">About Us</div>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Account;
