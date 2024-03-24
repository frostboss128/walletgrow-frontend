import React, { useState } from "react";
import { useGetAllInvestmentTypeQuery, useCreateInvestmentTypeMutation } from "../../../slices/adminApiSlice";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../../components/ui/dialog";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";
import ConfigList from "./ConfigList";
import { SkipBack, SkipForward } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";

const Config = () => {
  const [query, setQuery] = useState({ page: 1, pageSize: 20 });
  const [newData, setNewData] = useState({
    name: "",
    daily: 0,
    cycle: 0,
    cycle_description: "",
    duration: 6,
    duration_description: "",
  });

  const { data: configData, isLoading, error, refetch } = useGetAllInvestmentTypeQuery();
  const [createNewConfig, { isLoading: createLoading }] = useCreateInvestmentTypeMutation();

  const handleNewDataChange = e => setNewData({ ...newData, [e.target.name]: e.target.value });

  const pageHandler = page => setQuery({ ...query, page });

  const previousPageHandler = e => {
    e.preventDefault();
    if (query.page <= 1) return;
    setQuery({ ...query, page: query.page - 1 });
  };

  const nextPageHandler = e => {
    e.preventDefault();
    if (query.page >= configData.pages) return;
    setQuery({ ...query, page: query.page + 1 });
  };

  const handleCreate = async e => {
    try {
      const res = await createNewConfig(newData).unwrap();
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      refetch();
    }
  };

  return (
    <ScrollArea className="h-full w-full rounded-md border p-4">
      <div className="text-right">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a new investment method</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  name="name"
                  className="col-span-3"
                  onChange={handleNewDataChange}
                  placeholder="Please input name..."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="daily" className="text-right">
                  Daily profit
                </Label>
                <Input
                  type="number"
                  name="daily"
                  className="col-span-3"
                  onChange={handleNewDataChange}
                  placeholder="Please input daily profit rate"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cycle" className="text-right">
                  Cycle
                </Label>
                <Input
                  name="cycle"
                  className="col-span-3"
                  type="number"
                  min="1"
                  max="7"
                  onChange={handleNewDataChange}
                  placeholder="Please input cycle number"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cycle_description" className="text-right">
                  Cycle description
                </Label>
                <Input
                  name="cycle_description"
                  className="col-span-3"
                  onChange={handleNewDataChange}
                  placeholder="Please input cycle description"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Input
                  type="number"
                  name="duration"
                  className="col-span-3"
                  onChange={handleNewDataChange}
                  placeholder="Please input total duration months"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" onClick={handleCreate}>
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="*:hover:cursor-pointer">
            <TableHead className="">
              <div name="name" id="name" className="flex flex-row w-full items-center space-x-2">
                Name
              </div>
            </TableHead>
            <TableHead>
              <div name="profit" id="profit" className="flex flex-row w-full items-center space-x-2">
                Profit (%)
              </div>
            </TableHead>
            <TableHead>
              <div name="cycle" id="cycle" className="flex flex-row w-full items-center space-x-2">
                Cycle (1~7)
              </div>
            </TableHead>
            <TableHead>
              <div
                name="cycle_description"
                id="cycle_description"
                className="flex flex-row w-full items-center space-x-2"
              >
                Cycle Description
              </div>
            </TableHead>
            <TableHead>
              <div name="duration" id="duration" className="flex flex-row w-full items-center space-x-2">
                Duration (months)
              </div>
            </TableHead>
            <TableHead>
              <div
                name="duration_description"
                id="duration_description"
                className="flex flex-row w-full items-center space-x-2"
              >
                Description
              </div>
            </TableHead>
            <TableHead>
              <div name="users" id="users" className="flex flex-row w-full items-center space-x-2">
                Users
              </div>
            </TableHead>
            <TableHead>
              <div
                name="created_at"
                id="created_at"
                className="flex flex-row w-full justify-end items-center space-x-2"
              >
                <span>Created</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {configData?.map(investmentType => (
            <ConfigList investmentType={investmentType} key={investmentType._id} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <div className="flex flex-row w-full justify-between space-x-4">
                <div>Total : {configData?.total || 0}</div>
                <div className="flex-grow">Pages: {configData?.pages || 1}</div>
                <Select onValueChange={e => setQuery({ ...query, pageSize: e })}>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder={query.pageSize} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="20" selected>
                        20
                      </SelectItem>
                      <SelectItem value="50">50</SelectItem>
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
                  <PaginationItem onClick={e => pageHandler(configData.pages)}>
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

export default Config;
