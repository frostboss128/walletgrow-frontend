import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } from "../../../slices/usersApiSlice";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { formatLocalTime } from "../../../utils/formatTime";

const UserDetail = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data: userDetail, isLoading: userDetailLoading, isError: userDetailError, refetch } = useGetUserQuery(userId);
  const [data, setData] = useState({});

  useEffect(() => {
    if (userDetail) setData(userDetail);
  }, [userDetail]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: deleteUserLoading }] = useDeleteUserMutation();

  const updateUserHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      await updateUser({ userId, data }).unwrap();
      toast.success(`Updated successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      refetch();
    }
  };

  const deleteUserHandler = async (e) => {
    e.preventDefault();
    try {
      await deleteUser(userId).unwrap();
      toast.success(`Deleted successfully`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      navigate("/admin/users");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input type="email" defaultValue={userDetail?.email} name="email" onChange={changeHandler} />
      </div>
      <div className="">
        <Label htmlFor="username">Username</Label>
        <Input type="text" defaultValue={userDetail?.username} name="username" onChange={changeHandler} />
      </div>
      <div className="">
        <Label htmlFor="binance">Binance</Label>
        <Input type="number" defaultValue={userDetail?.coin} name="binance" onChange={changeHandler} />
      </div>
      <div className="">
        <Label htmlFor="level">Level</Label>
        <Input type="number" defaultValue={userDetail?.level} name="level" onChange={changeHandler} />
      </div>
      <div className="">
        <Label htmlFor="verified">Verified</Label>
        <Input defaultValue={userDetail?.verified} name="verified" onChange={changeHandler} />
      </div>
      <div className=""></div>
      <div className="created_at">
        <Label htmlFor="created_at">Created</Label>
        <Input
          type="datetime-local"
          defaultValue={formatLocalTime(userDetail?.created_at)}
          name="created_at"
          disabled
        />
      </div>
      <div className="">
        <Label htmlFor="updated_at">Updated</Label>
        <Input
          type="datetime-local"
          defaultValue={formatLocalTime(userDetail?.updated_at)}
          name="updated_at"
          disabled
        />
      </div>

      <div className="">
        <Button className="w-full" onClick={updateUserHandler}>
          Update
        </Button>
      </div>

      <div className="">
        <Button className="w-full" onClick={deleteUserHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserDetail;
