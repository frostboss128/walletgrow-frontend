import React from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx/lite";
import { TableRow, TableCell } from "../../../components/ui/table";
import { FilePenLine, Trash2 } from "lucide-react";
import formatTime from "../../../utils/formatTime";

const RechargeList = ({ recharge }) => {
  const navigate = useNavigate();

  const onRowHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/recharges/${recharge._id}`);
  };

  return (
    <TableRow key={recharge._id} onClick={onRowHandler}>
      <TableCell className="font-medium">{recharge.user.email}</TableCell>
      <TableCell>{recharge.type.toUpperCase()}</TableCell>
      <TableCell>{recharge.coin}</TableCell>
      <TableCell>{recharge.transactionId}</TableCell>
      <TableCell className="text-right">{formatTime(recharge.created_at)}</TableCell>
      <TableCell
        className={clsx(
          "text-right",
          recharge.status === "Approved" && "text-green-600",
          recharge.status === "Pending" && "text-sky-500",
          recharge.status === "Failed" && "text-red-600"
        )}
      >
        {recharge.status}
      </TableCell>
    </TableRow>
  );
};

export default RechargeList;
