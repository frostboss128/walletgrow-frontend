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
      <div className="divide-y-2 px-4 space-y-2">
        {recharges?.map((recharge) => (
          <RechargeList key={recharge._id} recharge={recharge} />
        ))}
      </div>
    </div>
  );
};

export default RechargeRecord;
