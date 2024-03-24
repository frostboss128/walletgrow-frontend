import React from "react";
import { clsx } from "clsx/lite";
import formatTime from "../../../utils/formatTime";

const CommissionList = ({ commission }) => {
  return (
    <div className="pt-2">
      <div className="grid grid-cols-12 gap-2 items-stretch pb-2">
        <div className="col-span-2 flex items-center">
          <img src={`/images/account/commission.svg`} alt="commission record" width={50} height={50} />
        </div>
        <div className="col-span-10 flex flex-col">
          <div className="font-medium">{commission.coin} $</div>
          <div className="text-sm">{formatTime(commission.created_at)}</div>
        </div>
      </div>
    </div>
  );
};

export default CommissionList;
