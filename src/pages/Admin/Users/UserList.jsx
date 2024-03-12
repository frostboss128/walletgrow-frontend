import React from "react";
import { useNavigate } from "react-router-dom";
import { TableRow, TableCell } from "../../../components/ui/table";
import { FilePenLine, Trash2 } from "lucide-react";
import formatTime from "../../../utils/formatTime";

const UserList = ({ user }) => {
  const navigate = useNavigate();

  const onRowHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/users/${user._id}`);
  };

  return (
    <TableRow key={user._id} onClick={onRowHandler}>
      <TableCell className="font-medium">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.verified.toString()}</TableCell>
      <TableCell>{user.coin}</TableCell>
      <TableCell className="text-right">{formatTime(user.created_at)}</TableCell>
      {/* <TableCell className="text-right">
        <div className="flex flex-row w-full justify-end items-center space-x-2">
          <Link to={`/admin/users/${user._id}`}>
            <FilePenLine />
          </Link>
          <Trash2 />
        </div>
      </TableCell> */}
    </TableRow>
  );
};

export default UserList;
