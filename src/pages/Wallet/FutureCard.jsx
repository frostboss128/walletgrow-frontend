import React from "react";
import { Smile, LockKeyhole } from "lucide-react";
import { Button } from "../../components/ui/button";
import clsx from "clsx/lite";

const FutureCard = ({ src, name, type, description, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-row gap-4 justify-between px-6 py-2 border items-center content-center rounded-lg text-gray-700 min-w-[280px] shadow-lg bg-gray",
        type === "Unlock now" && "bg-teal-50",
        type === "Soon" && "bg-slate-100"
      )}
    >
      <div className="flex flex-col gap-1 items-center">
        <div>
          <img src={src} alt={name} width={100} height={100} />
        </div>
        <div className="text-xl font-bold">{name}</div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button disabled={type === "Soon" ? true : false} className={clsx(className, "w-full bg-sky-400")}>
          {type === "Soon" && <Smile className="mr-2" />}
          {type === "Unlock now" && <LockKeyhole className="mr-2" />}
          <span>{type}</span>
        </Button>
        <div className="font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default FutureCard;
