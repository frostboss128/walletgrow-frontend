import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetWithdrawQuery,
  useUpdateWithdrawMutation,
  useDeleteWithdrawMutation,
} from "../../../slices/walletApiSlice";
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

const WithdrawDetail = () => {
  const navigate = useNavigate();
  const { withdrawId } = useParams();
  const {
    data: withdrawDetail,
    isLoading: withdrawDetailLoading,
    isError: withdrawDetailError,
    refetch,
  } = useGetWithdrawQuery(withdrawId);
  const [data, setData] = useState({});

  useEffect(() => {
    if (withdrawDetail) setData({ status: withdrawDetail.status, userId: withdrawDetail.user._id });
  }, [withdrawDetail]);

  const changeHandler = e => setData({ ...data, [e.target.name]: e.target.value });

  const [updateWithdraw, { isLoading: updateWithdrawLoading }] = useUpdateWithdrawMutation();
  const [deleteWithdraw, { isLoading: deleteWithdrawLoading }] = useDeleteWithdrawMutation();

  const updateWithdrawHandler = async e => {
    e.preventDefault();
    try {
      const res = await updateWithdraw({ withdrawId, data }).unwrap();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      refetch();
    }
  };

  const deleteWithdrawHandler = async e => {
    e.preventDefault();
    try {
      await deleteWithdraw(withdrawId).unwrap();
      toast.success(`Deleted successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      navigate("/admin/recharges");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input type="email" defaultValue={withdrawDetail?.user?.email} name="email" onChange={changeHandler} disabled />
      </div>
      <div className="">
        <Label htmlFor="binance">Binance</Label>
        <Input type="number" defaultValue={withdrawDetail?.coin} name="binance" onChange={changeHandler} disabled />
      </div>
      <div className="">
        <Label htmlFor="address">Address</Label>
        <Input type="text" defaultValue={withdrawDetail?.address} name="address" onChange={changeHandler} disabled />
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
      <div className="created_at">
        <Label htmlFor="created_at">Created</Label>
        <Input
          type="datetime-local"
          defaultValue={formatLocalTime(withdrawDetail?.created_at)}
          name="created_at"
          disabled
        />
      </div>
      <div className="">
        <Label htmlFor="updated_at">Updated</Label>
        <Input
          type="datetime-local"
          defaultValue={formatLocalTime(withdrawDetail?.updated_at)}
          name="updated_at"
          disabled
        />
      </div>

      <div className="">
        <Button className="w-full" onClick={updateWithdrawHandler}>
          Update
        </Button>
      </div>

      <div className="">
        <Button className="w-full" onClick={deleteWithdrawHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default WithdrawDetail;
