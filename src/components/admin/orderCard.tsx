/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Text from "@/UI/text";
import Checkbox from "@mui/material/Checkbox";
import getTime from "@/helpers/getTime";

import type { User } from "@/types";

type Props = {
  data: {
    user: User;
    status: string;
    orders: [];
    createdAt: string;
    _id: string;
  };
  handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function OrderCard({ data, handleCheckBox }: Props) {
  const { user, status, orders, createdAt, _id } = data;
  const { email, telephone } = user;

  const totalPrice = orders.reduce((acc: number, e: any) => acc + e.price, 0);

  const bg =
    status === "PENDING"
      ? "bg-green-200"
      : status === "RESOLVED"
      ? "bg-blue-200"
      : "bg-red-200";

  return (
    <Card className="flex p-1 m-1 gap-x-2 border shadow">
      <div className={`p-1 border rounded ${bg}`}>
        <Text>
          date:<b>{getTime(createdAt)}</b>
        </Text>
        <Text>{email}</Text>
        <Text color="text.secondary">tel:{telephone}</Text>
        <Text>status: {status}</Text>
      </div>

      <div className="flex gap-1 flex-col w-full p-1 border rounded">
        {orders?.map((el: any, ind: number) => (
          <div
            className="p-1 flex gap-x-2 border rounded bg-slate-100"
            key={ind}
          >
            <div className="">
              <Text> brand: {el.brand}</Text>
            </div>
            <div className="">
              <Text> {el.name}</Text>
            </div>
            <div className="ml-auto">
              <Text>{`price: ${el.price} qty:${el.qty}`}</Text>
            </div>
          </div>
        ))}
        <div className="mt-auto ml-auto p-1 rounded bg-green-300">
          <Text>
            total price:<b>{totalPrice}</b>
          </Text>
        </div>
      </div>
      <Checkbox
        value={_id}
        onChange={handleCheckBox}
        sx={{ height: "50px", marginTop: "auto", marginBottom: "auto" }}
      />
    </Card>
  );
}
