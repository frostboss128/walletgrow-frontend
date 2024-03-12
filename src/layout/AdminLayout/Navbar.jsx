import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">WalletGrow Admin</h1>
      </div>
      <div className="mt-4 px-4 text-xl">
        <ul className="space-y-2">
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/recharges">Recharges</Link>
          </li>
          <li>
            <Link to="/admin/withdraws">Withdraw</Link>
          </li>
          <li>
            <Link to="/admin/history">History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
