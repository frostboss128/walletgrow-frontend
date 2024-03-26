import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../../slices/usersApiSlice";
import { useInWalletMutation } from "../../slices/accountApiSlice";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import HeaderBar from "../../components/HeaderBar";

const In = () => {
  const navigate = useNavigate();
  const { data: accountData, isLoading: accountLoading, refetch: accountRefetch } = useProfileQuery();
  const [inWallet, { isLoading: inLoading }] = useInWalletMutation();

  const [coin, setCoin] = useState(0);

  const inHandler = async e => {
    e.preventDefault();
    if (!coin) return;
    try {
      const res = await inWallet({ coin }).unwrap();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      accountRefetch();
    }
  };

  return (
    <>
      <HeaderBar to="/account" title="In" />
      <div className="px-4 mt-8 space-y-4">
        <div className="p-2 border rounded-lg">
          <h3 className="font-medium">Total</h3>
          <div className="flex flex-row justify-between items-center space-x-2">
            <div className="space-x-2">
              <span>Coin :</span>
              <span className="font-bold text-green-500">{accountData?.coin || 0}</span>
            </div>
            <Button size="sm" onClick={e => accountRefetch()}>
              Refresh
            </Button>
          </div>
        </div>
        <div className="p-2 border rounded-lg space-y-2">
          <h3 className="font-medium">Transfer amount</h3>
          <div className="flex flex-row justify-between items-center space-x-3">
            <span>Coin: </span>
            <Input type="number" className="focus-visible:ring-0" onChange={e => setCoin(e.target.value)} />
          </div>
        </div>
        <Button type="submit" className="w-full" onClick={inHandler}>
          Transfer
        </Button>

        <Button className="w-full" onClick={e => navigate("/account/in_rec")}>
          Record
        </Button>
      </div>
    </>
  );
};

export default In;
