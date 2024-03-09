import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import Record from "./Record";

const RecordList = () => {
  return (
    <div className="space-y-4">
      <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
        <Link to="/wallet">
          <ArrowLeftCircle className="absolute left-3" />
        </Link>
        <h1>Record List</h1>
      </div>
      {new Array(10).fill(0).map((v, i) => (
        <Record key={i} />
      ))}
    </div>
  );
};

export default RecordList;
