import React from "react";

const Record = ({ id, time, amount }) => {
  return (
    <div className="px-6">
      <div className="flex flex-row gap-2 items-stretch pb-2 border-b-2">
        <div className="flex items-center">
          <img src="/images/wallet/tether-usdt-logo.svg" alt="tether-usdt-logo" width={50} height={50} />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="font-bold text-lg">ID</div>
          <div className="font-thin text-sm">time</div>
        </div>
        <div className="flex items-end">$ 9.999</div>
      </div>
    </div>
  );
};

export default Record;
