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

import type { ItemBasket } from "@/types";
import Image from "next/image";

import s from "./style.module.css";
import Text from "@/UI/text";

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
    <div className={s.container}>
      <div className={"flex"}>
        <div className={s.countContainer}>
          <button className={s.button} onClick={handleCountIncrement}>
            <Text>+</Text>
          </button>
          <Text>{qty}</Text>
          <button className={s.button} onClick={handleCountDecrement}>
            <Text>-</Text>
          </button>
        </div>
        <Image
          className={s.img}
          src={images[0]}
          alt={name}
          width={500}
          height={500}
        />
        <div className={"flex-row pl-2 "}>
          <h2 className={"text-xl "}>{name}</h2>
          <b className={s.price}>&#8372;{price}</b>
          <div className="mt-4">
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
    </div>
  );
}
