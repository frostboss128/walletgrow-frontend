import React from "react";
import { useGetRechargeRecordQuery } from "../../../slices/accountApiSlice";
import RechargeList from "./RechargeList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const RechargeRecord = () => {
  const { data: recharges, isLoading: getRechargesLoading, isError: getRechargesIsError } = useGetRechargeRecordQuery();

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Record List" />
      {recharges?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {recharges?.map((recharge) => (
            <RechargeList key={recharge._id} recharge={recharge} />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center min-h-[calc(100vh-96px)]">
          <h1 className="text-2xl font-bold text-sky-600 text-center">There is no Recharge records</h1>
        </div>
      )}
    </div>
  );
};

export default RechargeRecord;
