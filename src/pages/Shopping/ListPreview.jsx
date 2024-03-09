import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteListMutation, useRemoveMemberMutation } from "../../slices/listApiSlice";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { toast } from "sonner";

const ListPreview = ({ list, userInfo, refetch }) => {
  const navigate = useNavigate();
  const [deleteList, { isLoading: deleteLoading }] = useDeleteListMutation();
  const [removeMember, { isLoading: removeMemberLoading }] = useRemoveMemberMutation();

  const goToDetail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${list._id}`);
  };

  const onDeleteHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete?`)) {
      try {
        await deleteList(list._id).unwrap();
        toast.success(`List deleted successfully`);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const onLeaveHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to leave?`)) {
      try {
        await removeMember({ listId: list._id, userId: userInfo._id }).unwrap();
        toast.success(`Leave the list successfully!`);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="hover:cursor-default" onClick={goToDetail}>
      <Card className="p-4 space-y-2">
        <CardTitle className="flex flex-row justify-between">
          <div className="max-w-3/4 overflow-hidden">{list.name}</div>
          <Switch checked={list.status} />
        </CardTitle>
        <CardDescription className="">{list.description}</CardDescription>
        <CardContent>
          {userInfo._id === list.user._id ? (
            <Button variant="secondary" className="w-full" onClick={onDeleteHandler}>
              Delete
            </Button>
          ) : (
            <Button variant="secondary" className="w-full" onClick={onLeaveHandler}>
              Leave
            </Button>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          {list.created_at.slice(0, 10) + " " + list.created_at.slice(11, 19)}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListPreview;
