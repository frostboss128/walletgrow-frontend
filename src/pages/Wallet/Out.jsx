import React, { useState } from "react";
import { useOutWalletMutation, useGetWalletInfoQuery } from "../../slices/walletApiSlice";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import HeaderBar from "../../components/HeaderBar";

const Out = () => {
  const { data: walletInfo, isLoading: walletLoading, refetch: walletRefetch } = useGetWalletInfoQuery();
  const [outWallet, { isLoading: inLoading }] = useOutWalletMutation();

  const [coin, setCoin] = useState(0);

  const inHandler = async (e) => {
    e.preventDefault();
    if (!coin) return;
    try {
      const res = await outWallet({ coin }).unwrap();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      walletRefetch();
    }
  };

  return (
    <>
      <HeaderBar to="/account" title="Out" />
      <div className="px-4 mt-8 space-y-4">
        <div className="p-2 border rounded-lg">
          <h3 className="font-medium">Total in your X-Wallet</h3>
          <div className="flex flex-row justify-between items-center space-x-2">
            <div className="space-x-2">
              <span>Coin :</span>
              <span className="font-bold text-green-500">{walletInfo?.coin || 0}</span>
            </div>
            <Button size="sm" onClick={(e) => walletRefetch()}>
              Refresh
            </Button>
          </div>
        </div>
        <div className="p-2 border rounded-lg space-y-2">
          <h3 className="font-medium">Transfer amount</h3>
          <div className="flex flex-row justify-between items-center space-x-3">
            <span>Coin: </span>
            <Input type="number" className="focus-visible:ring-0" onChange={(e) => setCoin(e.target.value)} />
          </div>
        </div>
        <Button type="submit" className="w-full" onClick={inHandler}>
          Transfer
        </Button>
      </div>
    </>
  );
};

export default Out;
