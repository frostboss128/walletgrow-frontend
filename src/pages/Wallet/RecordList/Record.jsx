import React from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx/lite";
import formatTime from "../../../utils/formatTime";
import { ChevronRight } from "lucide-react";

const Record = ({ record }) => {
  const navigate = useNavigate();

  return (
    <div className="p-3" onClick={e => navigate(`/wallet/invhis/${record.type._id}`)}>
      <div className="flex flex-row w-full gap-2 items-center">
        <img src="/images/wallet/tether-usdt-logo.svg" loading="lazy" alt="tether-usdt-logo" width={50} height={50} />
        <div className="flex-grow">
          <div className="font-medium">{record.type.name}</div>
          <div className="text-sm">{formatTime(record.started)}</div>
        </div>
        <div className="text-right">
          <div className={clsx("font-medium", record.completed ? "text-sky-500" : "text-red-400")}>
            {record.completed ? "Completed" : "Ongoing"}
          </div>
          <div className="text-xs tx:text-sm font-medium text-sky-600">$ {record.coin}</div>
        </div>
        <ChevronRight />
      </div>
    </div>
  );
};

export default Record;
