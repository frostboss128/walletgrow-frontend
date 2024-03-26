import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Plan = ({ invType }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border shadow-md rounded-lg">
      <div className="grid grid-cols-12 font-medium items-center">
        <div className="col-span-7 space-y-1">
          <h3 className="font-bold text-2xl text-sky-400">{invType.name}</h3>
          <div className="space-x-2">
            <span className="bg-gray-300 rounded-sm px-1">Daily profit</span>
            <span className="bg-sky-400 text-white rounded-sm px-1">{invType.daily}%</span>
          </div>
          <div className="text-sm sx:text-base">{invType.cycle_description}</div>
          <div className="col-span-full text-sm mx:text-base">
            <div>{invType.duration} months</div>
            <div>{`(${invType.duration_description})`}</div>
          </div>
        </div>
        <div className="col-span-5">
          <img src="/images/invest.svg" loading="lazy" alt="invest_logo" width={150} height={150} />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center py-2">
        <div className="col-span-2 flex flex-row items-center space-x-2">
          <img src="/images/user.svg" loading="lazy" alt="user avatar" width={20} height={20} />
          <span>{invType.userCnt}</span>
        </div>
        <div className="col-span-1">
          <Button
            size="sm"
            className="bg-sky-400 text-white font-bold w-full"
            onClick={e => navigate(`/wallet/investment/${invType._id}`)}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
