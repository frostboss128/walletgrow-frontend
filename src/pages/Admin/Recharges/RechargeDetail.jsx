import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetRechargeQuery,
  useUpdateRechargeMutation,
  useDeleteRechargeMutation,
} from "../../../slices/accountApiSlice";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { formatLocalTime } from "../../../utils/formatTime";

const RechargeDetail = () => {
  const navigate = useNavigate();
  const { rechargeId } = useParams();
  const {
    data: rechargeDetail,
    isLoading: rechargeDetailLoading,
    isError: rechargeDetailError,
  } = useGetRechargeQuery(rechargeId);
  const [data, setData] = useState({});

  useEffect(() => {
    if (rechargeDetail) setData(rechargeDetail);
    console.log(rechargeDetail);
  }, [rechargeDetail]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const [updateRecharge, { isLoading: updateRechargeLoading }] = useUpdateRechargeMutation();
  const [deleteRecharge, { isLoading: deleteRechargeLoading }] = useDeleteRechargeMutation();

  const updateRechargeHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      toast.success(`Updated successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteRechargeHandler = async (e) => {
    e.preventDefault();
    try {
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
        <Input type="email" defaultValue={rechargeDetail?.user?.email} name="email" onChange={changeHandler} disabled />
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
        <Label htmlFor="status">Status</Label>
        <Input type="select" defaultValue={rechargeDetail?.status} name="verified" onChange={changeHandler} />
      </div>
      <div className=""></div>
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
  );
};

export default RechargeDetail;
