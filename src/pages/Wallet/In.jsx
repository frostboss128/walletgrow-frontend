import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const In = () => {
  return (
    <>
      <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
        <Link to="/account">
          <ArrowLeftCircle className="absolute left-3" />
        </Link>
        <h1>In</h1>
      </div>
      <div className="px-4 mt-8 space-y-6">
        <div>
          <h3>X-wallet(COIN)</h3>
          <div className="flex flex-row justify-between items-center space-x-2">
            <div className="space-x-2">
              <span>Total Coin</span>
              <span>{"Coin amount"}</span>
            </div>
            <Button size="sm">Refresh</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3>X-wallet(COIN)</h3>
          <div className="flex flex-row justify-between items-center space-x-3">
            <span>Coin: </span>
            <Input type="number" className="focus-visible:ring-0" />
          </div>
        </div>
        <Button className="w-full">Transfer</Button>
      </div>
    </>
  );
};

export default In;
