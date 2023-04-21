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

import s from "./style.module.css";
import type { ItemBasket } from "@/types";
import Image from "next/image";

type Props = {
  data: ItemBasket;
};

export default function CardBasket({ data }: Props) {
  const dispatch = useAppDispatch();

  const { _id: id, name, price, img, qty } = data;

  const finalPrice = qty * price;

  const handleCountDecrement = () => dispatch(decrementsQty({ id }));
  const handleCountIncrement = () => dispatch(incrementsQty({ id }));
  const handleDeleteProduct = () => dispatch(removeBasketEl({ id }));

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Image
          className={s.img}
          src={img}
          alt={name}
          width={500}
          height={500}
        />
        <div className={s.titleContainer}>
          <h2 className={s.title}>{name}</h2>
          <div className={s.countContainer}>
            <button className={s.button} onClick={handleCountDecrement}>
              -
            </button>
            <b className={s.count}>{qty}</b>
            <button className={s.button} onClick={handleCountIncrement}>
              +
            </button>
            <b className={s.price}>{finalPrice} grn</b>
          </div>
        </div>
        <Button
          sx={{ minWidth: "100px" }}
          variant="contained"
          onClick={handleDeleteProduct}
        >
          <DeleteIcon /> Delete
        </Button>
      </div>
    </div>
  );
}
