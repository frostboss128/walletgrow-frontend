import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ArrowLeftCircle, Waypoints } from "lucide-react";

const Recharge = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="space-y-4">
      <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
        <Link to="/account">
          <ArrowLeftCircle className="absolute top-3 left-3" />
        </Link>
        <h1 className="font-bold">In</h1>
      </div>

      <div className="flex flex-row items-center justify-between space-x-2 px-6">
        <div>Quantity</div>
        <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <div className="flex flex-row items-center space-x-2">
          <Button onClick={(e) => setQuantity(quantity + 1)}>+</Button>
          <Button onClick={(e) => setQuantity(quantity + 1000)}>+K</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 px-6 gap-2">
        <Button value="100" onClick={(e) => setQuantity(100)}>
          100
        </Button>
        <Button value="200" onClick={(e) => setQuantity(200)}>
          200
        </Button>
        <Button value="500" onClick={(e) => setQuantity(500)}>
          500
        </Button>
        <Button value="1000" onClick={(e) => setQuantity(1000)}>
          1000
        </Button>
        <Button value="2000" onClick={(e) => setQuantity(2000)}>
          2000
        </Button>
        <Button value="5000" onClick={(e) => setQuantity(5000)}>
          5000
        </Button>
        <Button value="10000" onClick={(e) => setQuantity(10000)}>
          10000
        </Button>
        <Button value="20000" onClick={(e) => setQuantity(20000)}>
          20000
        </Button>
      </div>

      <div className="px-6 font-bold pt-6 pb-2 text-red-500">
        <h3 className="text-xl underline underline-offset-4">Recharge rules :</h3>
        <ol className="list-decimal list-outside pl-4 mt-2">
          <li>Minimum recharge amount is 10 USDT or 100 TRX.</li>
          <li>The deposit will usually be credited into your account within 10 minutes.</li>
          <li>If you paid but the funds not been credited to your account , please contact customer service.</li>
        </ol>
      </div>

      <div className="divide-y-2 px-4">
        <div className="flex flex-row space-x-2 items-center">
          <Waypoints />
          <span> Online Recharge</span>
        </div>

        <div className="flex flex-row justify-between items-center space-x-4 py-4 text-xs">
          <div>
            <img src="/images/account/Tether.gif" alt="tether" width={120} />
          </div>
          <div>
            <div>USDT</div>
            <div>TRC20</div>
          </div>
          <div>
            <p>After payment success, please return to the pages fill in the Transaction Hash correctly.</p>
            <p>Limit USDT: 10 ~ 100</p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center space-x-4 py-4 text-xs">
          <div>
            <img src="/images/account/Tether.gif" alt="tether" width={120} />
          </div>
          <div>
            <div>USDT</div>
            <div>TRC20</div>
          </div>
          <div>
            <p>After payment success, please return to the pages fill in the Transaction Hash correctly.</p>
            <p>Limit USDT: 10 ~ 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
