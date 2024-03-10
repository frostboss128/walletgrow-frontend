import React from "react";
import { clsx } from "clsx/lite";
import formatTime from "../../../utils/formatTime";

const RechargeList = ({ recharge }) => {
  return (
    <div className="pt-2">
      <div className="flex flex-row gap-2 items-stretch pb-2">
        <div className="flex items-center">
          <img src={`/images/account/${recharge.type}.svg`} alt="type logo" width={50} height={50} />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="font-medium">{recharge.transactionId}</div>
          <div className="text-sm">{formatTime(recharge.created_at)}</div>
        </div>
        <div className="text-right">
          <div
            className={clsx(
              "font-medium",
              recharge.status === "Approved" && "text-green-600",
              recharge.status === "Pending" && "text-sky-500",
              recharge.status === "Failed" && "text-red-600"
            )}
          >
            {recharge.status}
          </div>
          <div>
            {recharge.coin} <span>{recharge.type.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeList;