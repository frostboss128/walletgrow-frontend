import React from "react";
import { clsx } from "clsx/lite";
import formatTime from "../../../utils/formatTime";

const Record = ({ record }) => {
  return (
    <div className="px-6">
      <div className="grid grid-cols-12 gap-2 items-stretch pb-2">
        <div className="col-span-2 flex items-center">
          <img src="/images/wallet/tether-usdt-logo.svg" alt="tether-usdt-logo" width={50} height={50} />
        </div>
        <div className="col-span-7 flex flex-col">
          <div className="font-medium">{record.type.name}</div>
          <div className="text-sm">{formatTime(record.started)}</div>
        </div>
        <div className="col-span-3 text-right">
          <div className={clsx("font-medium", record.completed ? "text-sky-500" : "text-red-400")}>
            {record.completed ? "Completed" : "Ongoing"}
          </div>
          <div className="text-xs tx:text-sm">
            <span>$ {record.coin}</span>&nbsp;
            {/* <span>{record.type.toUpperCase()}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
