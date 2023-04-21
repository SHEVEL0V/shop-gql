/** @format */

import React from "react";

import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import Checkbox from "@mui/material/Checkbox";
import s from "./style.module.css";
import Text from "@/UI/text";
import Image from "next/image";

type Props = {
  data: any;
  handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProductCardAdmin({ data = [], handleCheckBox }: Props) {
  const router = useRouter();

  const handleNavigate = () =>
    router.push({ pathname: `/admin/update/${data._id}` });

  return (
    <Card className={s.container}>
      <div onClick={handleNavigate} className={s.containerInfo}>
        <div className={s.containerImg}>
          <Image
            src={data.img}
            alt={data.name}
            className={s.img}
            width={500}
            height={500}
          />
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
