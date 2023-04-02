/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";

import Checkbox from "@mui/material/Checkbox";
import s from "./style.module.css";
import Text from "../../../UI/text";

export default function ListRemove({ data = [], handleCheckBox }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/admin/update/${data._id}`);

  return (
    <Card className={s.container}>
      <div onClick={handleNavigate} className={s.containerInfo}>
        <div className={s.containerImg}>
          <img src={data.img} alt={data.name} className={s.img} />
        </div>
        <Text>brand: {data?.brand}</Text>
        <Text>
          name: <b>{data.name}</b>
        </Text>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Text>
          price:<b>{data.price}</b>
        </Text>
      </div>

      <Checkbox value={data._id} onChange={handleCheckBox} />
    </Card>
  );
}
