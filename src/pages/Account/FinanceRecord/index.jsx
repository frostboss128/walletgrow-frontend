import React from "react";
import { useGetFinancesQuery } from "../../../slices/accountApiSlice";
import FinanceList from "./FinanceList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const RechargeRecord = () => {
  const { data: finances, isLoading: financesLoading, isError: financesIsError } = useGetFinancesQuery();

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Finance Record" />
      {finances?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {finances?.map(finance => (
            <FinanceList key={finance._id} finance={finance} />
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
