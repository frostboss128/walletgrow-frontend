import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetRechargeQuery,
  useUpdateRechargeMutation,
  useDeleteRechargeMutation,
} from "../../../slices/accountApiSlice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { formatLocalTime } from "../../../utils/formatTime";
import { clsx } from "clsx/lite";

const RechargeDetail = () => {
  const navigate = useNavigate();
  const { rechargeId } = useParams();
  const {
    data: rechargeDetail,
    isLoading: rechargeDetailLoading,
    isError: rechargeDetailError,
    refetch,
  } = useGetRechargeQuery(rechargeId);
  const [data, setData] = useState({});

  useEffect(() => {
    if (rechargeDetail)
      setData({ status: rechargeDetail.status, userId: rechargeDetail.user._id, amount: rechargeDetail.amount });
  }, [rechargeDetail]);

  const changeHandler = e => setData({ ...data, [e.target.name]: e.target.value });

  const [updateRecharge, { isLoading: updateRechargeLoading }] = useUpdateRechargeMutation();
  const [deleteRecharge, { isLoading: deleteRechargeLoading }] = useDeleteRechargeMutation();

  const updateRechargeHandler = async e => {
    e.preventDefault();
    console.log(data.amount);
    if (data.status === "Approved" && data.amount === 0) return toast.warning("Please input amount");
    try {
      const res = await updateRecharge({ rechargeId, data }).unwrap();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      refetch();
    }
  };

  const deleteRechargeHandler = async e => {
    e.preventDefault();
    try {
      await deleteRecharge(rechargeId).unwrap();
      toast.success(`Deleted successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      navigate("/admin/recharges");
    }
  };

  return (
    <div className="p-6 space-y-12">
      <div className="grid grid-cols-2 gap-6">
        <div className="">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            defaultValue={rechargeDetail?.user?.email}
            name="email"
            onChange={changeHandler}
            disabled
          />
        </div>
        <div className="">
          <Label htmlFor="transactionId">TransactionId</Label>
          <Input
            type="text"
            defaultValue={rechargeDetail?.transactionId}
            name="transactionId"
            onChange={changeHandler}
            disabled
          />
        </div>
        <div className="">
          <Label htmlFor="type">Type</Label>
          <Input
            type="text"
            defaultValue={rechargeDetail?.type?.toUpperCase()}
            name="type"
            onChange={changeHandler}
            disabled
          />
        </div>
        <div className="">
          <Label htmlFor="binance">Binance</Label>
          <Input type="number" defaultValue={rechargeDetail?.coin} name="binance" onChange={changeHandler} disabled />
        </div>
        <div className="">
          <Label htmlFor="status">Status</Label>
          <Select value={data?.status} onValueChange={value => setData({ ...data, status: value })}>
            <SelectTrigger
              className={clsx(
                "w-28",
                data?.status === "Approved" && "text-green-600",
                data?.status === "Pending" && "text-sky-500",
                data?.status === "Failed" && "text-red-600"
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Approved" className="text-green-600">
                  Approved
                </SelectItem>
                <SelectItem value="Pending" className="text-sky-600">
                  Pending
                </SelectItem>
                <SelectItem value="Failed" className="text-red-600">
                  Failed
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {data?.status === "Approved" && (
          <div className="">
            <Label htmlFor="amount">Amount</Label>
            <Input type="number" name="amount" onChange={changeHandler} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="created_at">
          <Label htmlFor="created_at">Created</Label>
          <Input
            type="datetime-local"
            defaultValue={formatLocalTime(rechargeDetail?.created_at)}
            name="created_at"
            disabled
          />
        </div>
        <div className="">
          <Label htmlFor="updated_at">Updated</Label>
          <Input
            type="datetime-local"
            defaultValue={formatLocalTime(rechargeDetail?.updated_at)}
            name="updated_at"
            disabled
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 justify-between">
        <div className="">
          <Button className="w-full" onClick={updateRechargeHandler}>
            Update
          </Button>
        </div>
        <div className="">
          <Button className="w-full" onClick={deleteRechargeHandler}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RechargeDetail;
