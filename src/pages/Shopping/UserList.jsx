import React from "react";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import { Button } from "../../components/ui/button";

const UserList = ({ users, members, addMemberHandler }) => {
  let meme = members?.map((member) => member._id);

  return (
    <>
      {users?.length ? (
        users
          ?.filter(({ _id }) => !meme?.includes(_id))
          ?.map((user) => (
            <div key={user._id} className="flex flex-row justify-between items-center">
              <div>{user.email}</div>
              <Button value={user._id} onClick={addMemberHandler}>
                Invite
              </Button>
            </div>
          ))
      ) : (
        <>There is no users</>
      )}
    </>
  );
};

export default UserList;
