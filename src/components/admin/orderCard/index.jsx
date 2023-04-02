/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Text from "../../../UI/text";
import Checkbox from "@mui/material/Checkbox";
import getTime from "../../../helpers/getTime";

import s from "./style.module.css";

export default function OrderCard({ data, handleCheckBox }) {
  const { user, status, orders, createdAt } = data;
  const { email, telephone } = user;

  const totalPrice = orders.reduce((acc, e) => acc + e.price, 0);

  const styleStatus = {
    display: "flex",
    borderRadius: "3px",
    marginRight: "5px",
    backgroundColor:
      status === "PENDING"
        ? "#96F095"
        : status === "RESOLVED"
        ? "#81BCDB"
        : "#FF927B",
  };

  return (
    <Card className={s.container}>
      <div className={s.emailContainer}>
        <Text>date:{getTime(createdAt)}</Text>
        <Text weight="bold">{email}</Text>
        <Text sx={{ fontSize: 16 }} color="text.secondary">
          tel:{telephone}
        </Text>
        <div style={styleStatus}>
          <Text>status: {status}</Text>
        </div>
      </div>

      <div className={s.orderContainer}>
        {orders?.map((el) => (
          <div className={s.itemOrderContainer} key={el._id}>
            <div className={s.brand}>
              <Text> brand: {el.brand}</Text>
            </div>
            <div className={s.title}>
              <Text weight="bold"> {el.name}</Text>
            </div>
            <div className={s.price}>
              <Text>{`price: ${el.price} qty:${el.qty}`}</Text>
            </div>
          </div>
        ))}
        <div style={{ marginTop: "auto", marginLeft: "auto" }}>
          <Text weight="bold">total price:{totalPrice}</Text>
        </div>
      </div>
      <Checkbox
        value={data._id}
        onChange={handleCheckBox}
        sx={{ height: "50px", marginTop: "auto", marginBottom: "auto" }}
      />
    </Card>
  );
}
