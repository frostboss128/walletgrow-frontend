import React from "react";
import { useGetUsersQuery } from "../../../slices/usersApiSlice";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import formatTime from "../../../utils/formatTime";

const Users = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  return (
    <div>
      <Table>
        {/* <TableCaption>The list of users</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Binance</TableHead>
            <TableHead className="text-right">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.users?.map((user) => (
            <TableRow key={user?._id}>
              <TableCell className="font-medium">{user?.email}</TableCell>
              <TableCell>{user?.username}</TableCell>
              <TableCell>{user?.verified.toString()}</TableCell>
              <TableCell>{user?.coin}</TableCell>
              <TableCell className="text-right">{formatTime(user?.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total : {data?.total || 0}</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Users;
