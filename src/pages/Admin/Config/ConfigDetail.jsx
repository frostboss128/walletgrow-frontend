import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetInvestmentTypeQuery,
  useUpdateInvestmentTypeMutation,
  useDeleteInvestmentTypeMutation,
} from "../../../slices/adminApiSlice";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { formatLocalTime } from "../../../utils/formatTime";

const ConfigDetail = () => {
  const navigate = useNavigate();
  const { typeId } = useParams();
  const {
    data: configDetail,
    isLoading: configDetailLoading,
    isError: configDetailIsError,
    refetch,
  } = useGetInvestmentTypeQuery(typeId);
  const [data, setData] = useState({});

  useEffect(() => {
    if (configDetail) setData(configDetail);
  }, [configDetail]);

  const changeHandler = e => setData({ ...data, [e.target.name]: e.target.value });

  const [updateInvestmentType, { isLoading: updateInvestmentTypeLoading }] = useUpdateInvestmentTypeMutation();
  const [deleteInvestmentType, { isLoading: deleteInvestmentTypeLoading }] = useDeleteInvestmentTypeMutation();

  const updateInvestmentTypeHandler = async e => {
    e.preventDefault();
    try {
      const res = await updateInvestmentType({ typeId, data }).unwrap();
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      refetch();
    }
  };

  const deleteInvestmentTypeHandler = async e => {
    e.preventDefault();
    try {
      await deleteInvestmentType(typeId).unwrap();
      toast.success(`Deleted successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      navigate("/admin/config");
    }
  };

  if (!configDetail || !typeId) return <></>;

  return (
    <div className=" p-6 sm:px-12 space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="">
          <Label htmlFor="name">Name</Label>
          <Input type="name" defaultValue={configDetail?.name} name="name" onChange={changeHandler} />
        </div>
        <div className="">
          <Label htmlFor="daily">Daily profit</Label>
          <Input type="text" defaultValue={configDetail?.daily} name="daily" onChange={changeHandler} />
        </div>
        <div className="">
          <Label htmlFor="cycle">Cycle</Label>
          <Input type="text" defaultValue={configDetail?.cycle} name="cycle" onChange={changeHandler} />
        </div>
        <div className="">
          <Label htmlFor="cycle_description">Cycle Description</Label>
          <Input defaultValue={configDetail?.cycle_description} name="cycle_description" onChange={changeHandler} />
        </div>
        <div className="">
          <Label htmlFor="duration">Duration months</Label>
          <Input defaultValue={configDetail?.duration} name="duration" onChange={changeHandler} />
        </div>
        <div className="">
          <Label htmlFor="duration_description">Duration Description</Label>
          <Input
            defaultValue={configDetail?.duration_description}
            name="duration_description"
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="created_at">
          <Label htmlFor="created_at">Created</Label>
          <Input
            type="datetime-local"
            defaultValue={formatLocalTime(configDetail?.created_at)}
            name="created_at"
            disabled
          />
        </div>
        <div className="">
          <Label htmlFor="updated_at">Updated</Label>
          <Input
            type="datetime-local"
            defaultValue={formatLocalTime(configDetail?.updated_at)}
            name="updated_at"
            disabled
          />
        </div>
      </div>

      <div className="flex flex-row justify-around items-center">
        <div className="">
          <Button className="w-40" onClick={updateInvestmentTypeHandler}>
            Update
          </Button>
        </div>

        <div className="">
          <Button className="w-40" onClick={deleteInvestmentTypeHandler}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigDetail;
