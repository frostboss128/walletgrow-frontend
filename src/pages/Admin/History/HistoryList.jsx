import React from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx/lite";
import { TableRow, TableCell } from "../../../components/ui/table";
import { FilePenLine, Trash2 } from "lucide-react";
import formatTime from "../../../utils/formatTime";

const HistoryList = ({ history }) => {
  const navigate = useNavigate();

  const onRowHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    // navigate(`/admin/histories/${history._id}`);
  };

  return (
    <TableRow key={history._id} onClick={onRowHandler}>
      <TableCell className="font-medium">{history.user.email}</TableCell>
      <TableCell>{history.type.toUpperCase()}</TableCell>
      <TableCell>{history.coin}</TableCell>
      <TableCell className="text-right">{formatTime(history.created_at)}</TableCell>
    </TableRow>
  );
};

export default HistoryList;
