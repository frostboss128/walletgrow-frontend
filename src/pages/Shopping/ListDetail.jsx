import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";
import {
  useGetAllQuery,
  useGetDetailQuery,
  useUpdateListMutation,
  useDeleteListMutation,
  useAddProductMutation,
  useRemoveProductMutation,
  useAddMemberMutation,
  useRemoveMemberMutation,
} from "../../slices/listApiSlice";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import ProductList from "./ProductList";
import InvitedList from "./InvitedList";
import UserList from "./UserList";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { toast } from "sonner";

const ListDetail = () => {
  const { listId } = useParams();
  const { userInfo } = useSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", status: false });
  const [chartData, setChartData] = useState([
    { name: "Solved", value: 0 },
    { name: "Unsolved", value: 0 },
  ]);

  const { data, isLoading, error, refetch: detailRefetch } = useGetDetailQuery(listId);
  const { refetch: allRefetch, isLoading: getAllLoading } = useGetAllQuery();

  const { data: userData, isLoading: getUsersLoading } = useGetUsersQuery();

  const [updateList, { isLoading: updateLoading }] = useUpdateListMutation();
  const [deleteList, { isLoading: deleteLoading }] = useDeleteListMutation();
  const [addMember, { isLoading: addMemberLoading }] = useAddMemberMutation();
  const [removeMember, { isLoading: removeMemberLoading }] = useRemoveMemberMutation();
  const [addProduct, { isLoading: addProductLoading }] = useAddProductMutation();
  const [removeProduct, { isLoading: removeProductLoading }] = useRemoveProductMutation();

  useEffect(() => {
    if (data?.status) setStatus(data.status);
    if (data?.products) {
      setChartData([
        { name: "Solved", value: data.products.filter((product) => product.status).length },
        { name: "Unsolved", value: data.products.filter((product) => !product.status).length },
      ]);
    }
  }, [data]);

  const addProductHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await addProduct({ listId, data: newItem }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const removeProductHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await removeProduct({ listId, productId: e.target.value }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const addMemberHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await addMember({ listId, userId: e.target.value }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const removeMemberHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await removeMember({ listId, userId: e.target.value }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const onDeleteHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete this?`)) {
      try {
        await deleteList(listId).unwrap();
        toast.success(`List deleted successfully`);
        allRefetch();
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const onLeaveHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Are you sure you want to leave?")) {
      try {
        await removeMember({ listId, userId: userInfo._id }).unwrap();
        toast.success(`Leave the list successfully!`);
        allRefetch();
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const listStatusChangeHandler = async (value) => {
    setStatus(value);
    try {
      await updateList({ listId, status: value }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      setStatus(!value);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center space-x-4">
        <h1 className="text-2xl font-extrabold underline underline-offset-4 flex-grow">{data?.name}</h1>
        <Switch checked={status} onCheckedChange={listStatusChangeHandler} />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add a new item</Button>
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
                <Input
                  id="name"
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Switch onCheckedChange={(value) => setNewItem({ ...newItem, status: value })} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addProductHandler}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {userInfo?._id === data?.user?._id ? (
          <Button variant="secondary" onClick={onDeleteHandler}>
            Delete
          </Button>
        ) : (
          <Button variant="secondary" onClick={onLeaveHandler}>
            Leave
          </Button>
        )}
      </div>
      <div className="grid grid-cols-12 gap-x-4  w-full">
        <div className="max-sm:col-span-12 col-span-7 space-y-4">
          <div className="mt-6">
            <h2>Description: {data?.description}</h2>
            <h2>Created by: {data?.user?.email}</h2>
          </div>
          <div className="border rounded-lg py-4 px-4 md:px-6 lg:px-12">
            {data?.products?.length ? (
              data?.products?.map((product) => (
                <ProductList
                  key={product._id}
                  product={product}
                  listId={listId}
                  detailRefetch={detailRefetch}
                  removeProductHandler={removeProductHandler}
                />
              ))
            ) : (
              <>There is no product</>
            )}
          </div>
          <PieChart height={250} width={320} className="!w-full">
            <Pie
              // width="100%"
              // height="100%"
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#0F172A"
              label={(label) => `${label.name}: ${label.value}`}
            />
          </PieChart>
        </div>
        <div className="max-sm:col-span-12 col-span-5 space-y-4">
          <h1 className="underline underline-offset-2 text-lg font-bold">Invited Member list</h1>
          <div className="overflow-y-auto border rounded-lg py-4 px-4 md:px-6 lg:px-8 min-h-12">
            <InvitedList members={data?.members} removeMemberHandler={removeMemberHandler} />
          </div>
          <h1 className="underline underline-offset-2 text-lg font-bold">User list</h1>
          <div className="overflow-y-auto border rounded-lg py-4 px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-2">
              <UserList users={userData} members={data?.members} addMemberHandler={addMemberHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
