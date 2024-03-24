import React from "react";
import { useInvitedFriendsQuery } from "../../../slices/accountApiSlice";
import InvitedList from "./InvitedList";
import HeaderBar from "../../../components/HeaderBar";
import { toast } from "sonner";

const InvitedRecord = () => {
  const { data, isLoading, isError, error } = useInvitedFriendsQuery();

  return (
    <div className="space-y-2">
      <HeaderBar to="/account" title="Invited friends" />
      {data?.length ? (
        <div className="divide-y-2 px-4 space-y-2">
          {data?.map(friend => (
            <InvitedList key={friend._id} friend={friend} />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center min-h-[calc(100vh-96px)]">
          <h1 className="text-2xl font-bold text-sky-600 text-center">There is no invited friend</h1>
        </div>
      )}
    </div>
  );
};

export default InvitedRecord;
