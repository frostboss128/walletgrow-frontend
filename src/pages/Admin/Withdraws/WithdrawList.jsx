import React from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx/lite";
import { TableRow, TableCell } from "../../../components/ui/table";
import { FilePenLine, Trash2 } from "lucide-react";
import formatTime from "../../../utils/formatTime";

const WithdrawList = ({ withdraw }) => {
  const navigate = useNavigate();

  const onRowHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/withdraws/${withdraw._id}`);
  };

  return (
    <TableRow key={withdraw._id} onClick={onRowHandler}>
      <TableCell className="font-medium">{withdraw.user.email}</TableCell>
      <TableCell>{withdraw.coin}</TableCell>
      <TableCell>{withdraw.address}</TableCell>
      <TableCell
        className={clsx(
          withdraw.status === "Approved" && "text-green-600",
          withdraw.status === "Pending" && "text-sky-500",
          withdraw.status === "Failed" && "text-red-600"
        )}
      >
        {withdraw.status}
      </TableCell>
      <TableCell className="text-right">{formatTime(withdraw.created_at)}</TableCell>
    </TableRow>
  );
};

export default WithdrawList;
