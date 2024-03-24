import React from "react";
import { Link } from "react-router-dom";
import { useGetInvestmentRecordQuery } from "../../../slices/adminApiSlice";
import { ArrowLeftCircle } from "lucide-react";
import Record from "./Record";

const RecordList = () => {
  const { data, isLoading, isError, error } = useGetInvestmentRecordQuery();

  return (
    <div className="space-y-4">
      <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
        <Link to="/wallet">
          <ArrowLeftCircle className="absolute left-3" />
        </Link>
        <h1>Investment Record</h1>
      </div>
      {data?.map(record => (
        <Record key={record._id} record={record} />
      ))}
    </div>
  );
};

export default RecordList;
