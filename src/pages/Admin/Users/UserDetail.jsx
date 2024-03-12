import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } from "../../../slices/usersApiSlice";

const UserDetail = () => {
  const { userId } = useParams();
  console.log(userId);

  const { data: userDetail, isLoading: userDetailLoading, isError: userDetailError } = useGetUserQuery(userId);

  return <div>UserDetail</div>;
};

export default UserDetail;
