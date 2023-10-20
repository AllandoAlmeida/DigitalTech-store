import { Separator } from "@radix-ui/react-separator";
import React from "react";

export const CartDetails = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <>
      <Separator />
      <div className="flex items-center justify-between">
        <p>{label}</p>
        <p className="flex w-[100px] justify-between">
          R$ <span>{value}</span>
        </p>
      </div>
    </>
  );
};

