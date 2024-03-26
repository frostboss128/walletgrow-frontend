import React from "react";
import { useGetHistoryByTypeQuery } from "../../../slices/accountApiSlice";
import OutRecordList from "./OutRecordList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const OutRecord = () => {
  const { data: records, isLoading: recordsLoading, isError: recordsIsError } = useGetHistoryByTypeQuery("out");

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Out Record" />
      {records?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {records?.map(record => (
            <OutRecordList key={record._id} record={record} />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center min-h-[calc(100vh-96px)]">
          <h1 className="text-2xl font-bold text-sky-600 text-center">There is no record</h1>
        </div>
      )}
    </div>
  );
};

export default OutRecord;
