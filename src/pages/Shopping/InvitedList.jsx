import React from "react";
import { Button } from "../../components/ui/button";

const InvitedList = ({ members, removeMemberHandler }) => {
  return (
    <div>
      {members?.length ? (
        <div className="grid grid-cols-1 gap-2">
          {members?.map((member) => (
            <div key={member._id} className="flex flex-row justify-between items-center">
              <div>{member.email}</div>
              <Button value={member._id} onClick={removeMemberHandler}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-2">There is no invited members</div>
      )}
    </div>
  );
};

export default InvitedList;
