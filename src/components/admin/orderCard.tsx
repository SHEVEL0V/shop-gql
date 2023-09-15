/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Text from "@/UI/text";
// import BtbDelete from "@/UI/btn/btnDelete";
import getTime from "@/helpers/getTime";
import Button from "@mui/material/Button";

import type { User } from "@/types";

type Props = {
  data: {
    user: User;
    status: string;
    orders: [];
    createdAt: string;
    _id: string;
  };
  updateOrder: (id: string, status: string) => void;
};

export default function OrderCard({ data, updateOrder }: Props) {
  const { user, status, orders, createdAt, _id } = data;
  const { email, telephone } = user;

  const totalPrice = orders.reduce((acc: number, e: any) => acc + e.price, 0);

  const bg =
    status === "PENDING"
      ? "bg-green-200"
      : status === "RESOLVED"
      ? "bg-blue-200"
      : "bg-red-200";

  const disabled = (status: string, currentStatus: string) =>
    status === currentStatus;

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
      <div className="flex gap-1 flex-col">
        <Button
          color="success"
          variant="contained"
          disabled={disabled(status, "PENDING")}
          onClick={() => updateOrder(_id, "PENDING")}
        >
          pen
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={disabled(status, "RESOLVED")}
          onClick={() => updateOrder(_id, "RESOLVED")}
        >
          res
        </Button>
        <Button
          variant="contained"
          color="error"
          disabled={disabled(status, "REJECTED")}
          onClick={() => updateOrder(_id, "REJECTED")}
        >
          rej
        </Button>
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
      {/* <div className="flex items-center">
        <BtbDelete
          onClick={() => {
            console.log("delete");
          }}
        />
      </div> */}
    </Card>
  );
}
