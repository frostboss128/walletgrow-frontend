import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetInvestmentHistoryByTypeQuery } from "../../../slices/adminApiSlice";
import { ArrowLeftCircle } from "lucide-react";
import InvestmentHistoryList from "./InvestmentHistoryList";

const InvestmentHistory = () => {
  const { investTypeId } = useParams();

  const { data, isLoading, isError, error, refetch } = useGetInvestmentHistoryByTypeQuery(investTypeId);

  console.log(data);

  return (
    <div className="space-y-4">
      <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
        <Link to="/wallet">
          <ArrowLeftCircle className="absolute left-3" />
        </Link>
        <h1>Investment Record</h1>
      </div>
      {data?.map(record => (
        <InvestmentHistoryList key={record._id} record={record} />
      ))}
    </div>
  );
};

export default InvestmentHistory;
