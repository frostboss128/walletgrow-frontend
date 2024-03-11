import React from "react";
import { useGetWithdrawsQuery } from "../../../slices/walletApiSlice";
import WithdrawList from "./WithdrawList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";
import Loading from "../../../components/Loading";

const RechargeRecord = () => {
  const { data: withdraws, isLoading: getWithdrawsLoading, isError: getWithdrawsIsError } = useGetWithdrawsQuery();

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Withdraw Record" />
      {withdraws?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {withdraws?.map((withdraw) => (
            <WithdrawList key={withdraw._id} withdraw={withdraw} />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center min-h-80">
          <h1 className="text-2xl font-bold text-sky-600 text-center">There is no withdraw records</h1>
        </div>
      )}
    </div>
  );
};

export default RechargeRecord;
