import React from "react";
import { clsx } from "clsx/lite";
import formatTime from "../../../utils/formatTime";

const RechargeList = ({ withdraw }) => {
  return (
    <div className="pt-2">
      <div className="grid grid-cols-12 gap-2 items-stretch pb-2">
        <div className="col-span-2 flex items-center w-12">
          <img
            src={`/images/account/withdraw.png`}
            loading="lazy"
            alt="withdraw image"
            width={50}
            height={50}
            className="!w-12"
          />
        </div>
        <div className="col-span-7 flex flex-col">
          <div className="font-medium truncate">{withdraw.address}</div>
          <div className="text-sm">{formatTime(withdraw.created_at)}</div>
        </div>
        <div className="col-span-3 text-right">
          <div
            className={clsx(
              "font-medium",
              withdraw.status === "Approved" && "text-green-600",
              withdraw.status === "Pending" && "text-sky-500",
              withdraw.status === "Failed" && "text-red-600"
            )}
          >
            {withdraw.status}
          </div>
          <div>{withdraw.coin}</div>
        </div>
      </div>
    </div>
  );
};

export default RechargeList;
