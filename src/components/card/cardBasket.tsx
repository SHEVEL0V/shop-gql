/** @format */

import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  removeBasketEl,
  decrementsQty,
  incrementsQty,
} from "@/redux/basket/slice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import Text from "@/UI/text";

import type { ItemBasket } from "@/types";

type Props = {
  data: ItemBasket;
};

export default function CardBasket({ data }: Props) {
  const dispatch = useAppDispatch();

  const { _id: id, name, price, images, qty } = data;

  const finalPrice = qty * price;

  const handleCountDecrement = () => dispatch(decrementsQty({ id }));
  const handleCountIncrement = () => dispatch(incrementsQty({ id }));
  const handleDeleteProduct = () => dispatch(removeBasketEl({ id }));

  return (
    <div className="bg-slate-100 rounded shadow  p-2 flex">
      <div className="flex flex-col justify-between mr-1 items-center rounded-2xl bg-slate-200">
        <button className="w-7" onClick={handleCountIncrement}>
          <Text>+</Text>
        </button>
        <Text>{qty}</Text>
        <button className="w-7" onClick={handleCountDecrement}>
          <Text>-</Text>
        </button>
      </div>
      <Image
        className="max-w-32 h-20 object-contain"
        src={images[0]}
        alt={name}
        width={100}
        height={100}
      />
      <div className={"flex-row pl-2 "}>
        <h2 className={"text-base h-10 mb-1 "}>{name}</h2>

        <div className="flex">
          <span className="text-base text-green-600  mr-4">&#8372;{price}</span>
          <Text>1 * {qty} pc(s)</Text>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <Text> &#8372;{finalPrice}</Text>
        <Button
          sx={{
            height: "60px",
            borderRadius: "100%",
          }}
          onClick={handleDeleteProduct}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
