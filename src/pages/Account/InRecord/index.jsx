import React from "react";
import { useGetHistoryByTypeQuery } from "../../../slices/accountApiSlice";
import InRecordList from "./InRecordList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const InRecord = () => {
  const { data: records, isLoading: recordsLoading, isError: recordsIsError } = useGetHistoryByTypeQuery("in");

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="In Record" />
      {records?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {records?.map(record => (
            <InRecordList key={record._id} record={record} />
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

export default InRecord;
