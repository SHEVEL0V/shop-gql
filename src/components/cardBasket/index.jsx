/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import {
  removeBasketEl,
  decrementsQty,
  incrementsQty,
} from "../../redux/basket/slice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./style.module.css";

export default function CardBasket({ data, handlePrice }) {
  const dispatch = useDispatch();

  const { _id, name, price, img, qty } = data;

  const finalPrice = qty * price;

  const handleCountDecrement = () => dispatch(decrementsQty(_id));
  const handleCountIncrement = () => dispatch(incrementsQty(_id));
  const handleDeleteProduct = () => dispatch(removeBasketEl(data));

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <img className={s.img} src={img} alt={name} />
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
