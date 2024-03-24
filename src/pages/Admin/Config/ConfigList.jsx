import React from "react";
import { useNavigate } from "react-router-dom";
import { TableRow, TableCell } from "../../../components/ui/table";
import formatTime from "../../../utils/formatTime";

const UserList = ({ investmentType }) => {
  const navigate = useNavigate();

  const onRowHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/config/${investmentType._id}`);
  };

  return (
    <TableRow key={investmentType._id} onClick={onRowHandler}>
      <TableCell className="font-medium">{investmentType.name}</TableCell>
      <TableCell>{investmentType.daily}</TableCell>
      <TableCell>{investmentType.cycle}</TableCell>
      <TableCell>{investmentType.cycle_description}</TableCell>
      <TableCell>{investmentType.duration}</TableCell>
      <TableCell>{investmentType.duration_description}</TableCell>
      <TableCell>{investmentType.userCnt}</TableCell>
      <TableCell className="text-right">{formatTime(investmentType.created_at)}</TableCell>
    </TableRow>
  );
};

export default UserList;
