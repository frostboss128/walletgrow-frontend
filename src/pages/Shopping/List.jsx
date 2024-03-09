import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllQuery, useCreateListMutation } from "../../slices/listApiSlice";
import ListPreview from "./ListPreview";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { toast } from "sonner";

const List = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(({ auth }) => auth);
  const [newData, setNewData] = useState({ name: "", description: "", status: false });
  const { data, isLoading, error, refetch } = useGetAllQuery();
  const [createList, { isLoading: createListLoading }] = useCreateListMutation();

  const handleNewDataChange = (e) => setNewData({ ...newData, [e.target.name]: e.target.value });
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createList(newData).unwrap();
      toast.success(`Create a list successfully`);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="space-y-12">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="py-4 text-2xl font-bold">My Shopping List: {data?.own?.length || 0}</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create a new list</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" name="name" className="col-span-3" onChange={handleNewDataChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input id="description" name="description" className="col-span-3" onChange={handleNewDataChange} />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Switch onCheckedChange={(value) => setNewData({ ...newData, status: value })} />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleCreate}>
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {data?.own?.map((list) => (
            <ListPreview key={list._id} list={list} userInfo={userInfo} refetch={refetch} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="py-4 text-2xl font-bold">Invited List: {data?.invited?.length || 0}</div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {data?.invited?.map((list) => (
            <ListPreview key={list._id} list={list} userInfo={userInfo} refetch={refetch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
