import React, { useState } from "react";
import { useRechargeToAccountMutation } from "../../slices/accountApiSlice";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Waypoints } from "lucide-react";
import { toast } from "sonner";
import isEmpty from "../../utils/isEmpty";
import HeaderBar from "../../components/HeaderBar";

const address1 = "TVhHmraG3wuAWmEN5hVARUoDjqnhTQAJPE";

const Recharge = () => {
  const [data, setData] = useState({ coin: 100, transactionId: "" });

  const setCoinHandler = e => setData({ ...data, coin: parseInt(e.target.value) });

  const [rechargeToAccount, { isLoading: recharegeLoading }] = useRechargeToAccountMutation();

  const walletAddressCopyHandler = async e => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(address1);
      alert(`The address has been copied successfully: ${address1} \n\nPlease recheck.`);
    } catch (error) {
      alert("something went wrong");
    }
  };

  const transactionSubmitHandler = async e => {
    if (isEmpty(data.transactionId)) return toast.error(`Transaction ID is required`);
    try {
      await rechargeToAccount({ ...data, type: e.target.name });
      toast.success(`Recharge request has been sent successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      setData({ coin: 100, transactionId: "" });
    }
  };

  return (
    <div className="space-y-4">
      <HeaderBar to="/account" title="Recharge to your account" />

      <div className="flex flex-row items-center justify-between space-x-2 px-6">
        <div>Quantity</div>
        <Input type="number" value={data.coin} onChange={e => setData({ ...data, coin: e.target.value })} />
        <div className="flex flex-row items-center space-x-2">
          <Button onClick={e => setData({ ...data, coin: data.coin + 1 })}>+</Button>
          <Button onClick={e => setData({ ...data, coin: data.coin + 1000 })}>+K</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 px-6 gap-2">
        <Button value="100" onClick={setCoinHandler}>
          100
        </Button>
        <Button value="200" onClick={setCoinHandler}>
          200
        </Button>
        <Button value="500" onClick={setCoinHandler}>
          500
        </Button>
        <Button value="1000" onClick={setCoinHandler}>
          1000
        </Button>
        <Button value="2000" onClick={setCoinHandler}>
          2000
        </Button>
        <Button value="5000" onClick={setCoinHandler}>
          5000
        </Button>
        <Button value="10000" onClick={setCoinHandler}>
          10000
        </Button>
        <Button value="20000" onClick={setCoinHandler}>
          20000
        </Button>
      </div>

      <div className="px-6 font-bold pt-6 pb-2 text-red-500">
        <h3 className="text-xl underline underline-offset-4">Recharge rules :</h3>
        <ol className="list-decimal list-outside pl-4 mt-2">
          <li>Minimum recharge amount is 10 USDT or 100 TRX.</li>
          <li>The deposit will usually be credited into your account within 10 minutes.</li>
          <li>If you paid but the funds not been credited to your account , please contact customer service.</li>
        </ol>
      </div>

      <div className="divide-y-2 px-4">
        <div className="flex flex-row space-x-2 items-center">
          <Waypoints />
          <span> Online Recharge</span>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-row justify-between items-center space-x-4 py-4 text-xs">
              <div>
                <img src="/images/account/Tether.gif" alt="tether" width={120} />
              </div>
              <div className="font-bold text-sm">
                <div>USDT</div>
                <div>TRC20</div>
              </div>
              <div className="space-y-2">
                <p className="text-red-500 font-bold">
                  After payment success, please return to the pages fill in the Transaction Hash correctly.
                </p>
                <p>Limit USDT: 10 ~ 10,000</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="overflow-hidden space-y-2">
              <DialogTitle className="truncate space-y-2">
                <p>COIN {data.coin}.</p>
                <p className="text-sm">{address1}</p>
              </DialogTitle>
              <DialogDescription>You can click the qr code to copy the address.</DialogDescription>
            </DialogHeader>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">QR Code</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="grid place-content-center" onClick={walletAddressCopyHandler}>
              <img
                src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${address1}`}
                alt="usdt qr code"
                width={150}
                height={150}
              />
            </div>
            <div>
              <Input
                id="transactionId"
                placeholder="Transaction ID"
                value={data.transactionId}
                onChange={e => setData({ ...data, transactionId: e.target.value })}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" name="usdt" onClick={transactionSubmitHandler}>
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-row justify-between items-center space-x-4 py-4 text-xs">
              <div>
                <img src="/images/account/TRX.gif" alt="tether" width={120} />
              </div>
              <div className="font-bold text-sm">
                <div>TRX</div>
                <div>TRC20</div>
              </div>
              <div className="space-y-2">
                <p className="text-red-500 font-bold">
                  After payment success, please return to the pages fill in the Transaction Hash correctly.
                </p>
                <p>Limit USDT: 100 ~ 100,000</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="overflow-hidden space-y-2">
              <DialogTitle className="truncate space-y-2">
                <p>COIN {data.coin}.</p>
                <p className="text-sm">{address1}</p>
              </DialogTitle>
              <DialogDescription>You can copy the address click the qr code.</DialogDescription>
            </DialogHeader>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">QR Code</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="grid place-content-center" onClick={walletAddressCopyHandler}>
              <img
                src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${address1}`}
                alt="usdt qr code"
                width={150}
                height={150}
              />
            </div>
            <div>
              <Input
                id="transactionId"
                placeholder="Transaction ID"
                value={data.transactionId}
                onChange={e => setData({ ...data, transactionId: e.target.value })}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" name="trx" onClick={transactionSubmitHandler}>
                  Submit
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Recharge;
