import React, { useState } from "react";
import { useGetAllRechargesQuery } from "../../../slices/accountApiSlice";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ScrollArea } from "../../../components/ui/scroll-area";
import RechargeList from "./RechargeList";
import { SkipBack, SkipForward, ArrowUpWideNarrow, ArrowDownWideNarrow, FilePenLine, Trash2 } from "lucide-react";

const Recharges = () => {
  const [query, setQuery] = useState({ page: 1, pageSize: 50, keyword: "", sort: "created_at", sortDirection: 1 });
  const { data: rechargeData, isLoading, isError, error } = useGetAllRechargesQuery({ ...query });

  const sortHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.id === query.sort) setQuery({ ...query, sortDirection: -1 * query.sortDirection });
    else setQuery({ ...query, sort: e.currentTarget.id, sortDirection: 1 });
  };

  const pageHandler = page => setQuery({ ...query, page });

  const previousPageHandler = e => {
    e.preventDefault();
    if (query.page <= 1) return;
    setQuery({ ...query, page: query.page - 1 });
  };

  const nextPageHandler = e => {
    e.preventDefault();
    if (query.page >= rechargeData.pages) return;
    setQuery({ ...query, page: query.page + 1 });
  };

  return (
    <ScrollArea className="h-full w-full rounded-md border p-4">
      <Table>
        <TableHeader>
          <TableRow className="*:hover:cursor-pointer">
            <TableHead className="w-[100px]">
              <div
                name="user.email"
                id="user.email"
                onClick={sortHandler}
                className="flex flex-row w-full items-center space-x-2"
              >
                <span>Email</span>
                {query.sort === "user.email" &&
                  (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
            <TableHead>
              <div name="type" id="type" onClick={sortHandler} className="flex flex-row w-full items-center space-x-2">
                <span>Type</span>
                {query.sort === "type" && (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
            <TableHead>
              <div
                name="binance"
                id="binance"
                onClick={sortHandler}
                className="flex flex-row w-full items-center space-x-2"
              >
                <span>Coin</span>
                {query.sort === "binance" &&
                  (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
            <TableHead>
              <div
                name="transactionId"
                id="transactionId"
                onClick={sortHandler}
                className="flex flex-row w-full items-center space-x-2"
              >
                <span>TransactionId</span>
                {query.sort === "transactionId" &&
                  (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
            <TableHead>
              <div
                name="created_at"
                id="created_at"
                onClick={sortHandler}
                className="flex flex-row w-full justify-end items-center space-x-2"
              >
                <span>Created</span>
                {query.sort === "created_at" &&
                  (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
            <TableHead>
              <div
                name="status"
                id="status"
                onClick={sortHandler}
                className="flex flex-row w-full justify-end items-center space-x-2"
              >
                <span>Status</span>
                {query.sort === "status" &&
                  (query.sortDirection === 1 ? <ArrowDownWideNarrow /> : <ArrowUpWideNarrow />)}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rechargeData?.recharges?.map(recharge => (
            <RechargeList recharge={recharge} key={recharge._id} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <div className="flex flex-row w-full justify-between space-x-4">
                <div>Total : {rechargeData?.total || 0}</div>
                <div className="flex-grow">Pages: {rechargeData?.pages || 1}</div>
                <Select onValueChange={e => setQuery({ ...query, pageSize: e })}>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder={query.pageSize} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50" selected>
                        50
                      </SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </TableCell>
            <TableCell colSpan={2}>
              <Pagination className="justify-end *:hover:cursor-pointer">
                <PaginationContent>
                  <PaginationItem onClick={e => pageHandler(1)}>
                    <SkipBack />
                  </PaginationItem>
                  <PaginationItem onClick={previousPageHandler}>
                    <PaginationPrevious />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink isActive>{query.page}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem onClick={nextPageHandler}>
                    <PaginationNext />
                  </PaginationItem>
                  <PaginationItem onClick={e => pageHandler(rechargeData.pages)}>
                    <SkipForward />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ScrollArea>
  );
};

export default Recharges;
