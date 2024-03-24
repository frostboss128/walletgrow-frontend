import React from "react";
import { useGetHistoryByTypeQuery } from "../../../slices/accountApiSlice";
import CommissionList from "./CommissionList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const CommissionRecord = () => {
  const {
    data: commissions,
    isLoading: commissionsLoading,
    isError: commissionsIsError,
  } = useGetHistoryByTypeQuery("commission");

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Commission Record" />
      {commissions?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {commissions?.map(commission => (
            <CommissionList key={commission._id} commission={commission} />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center min-h-[calc(100vh-96px)]">
          <h1 className="text-2xl font-bold text-sky-600 text-center">There is no Commission record</h1>
        </div>
      )}
    </div>
  );
};

export default CommissionRecord;
