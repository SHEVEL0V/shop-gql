/** @format */

import React from "react";

import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import Checkbox from "@mui/material/Checkbox";
import Text from "@/UI/text";
import Image from "next/image";

import type { Product } from "@/types";
type Props = {
  data: Product;
  handleCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProductCardAdmin({ data, handleCheckBox }: Props) {
  const router = useRouter();

  const handleNavigate = () =>
    router.push({ pathname: `/admin/update/${data._id}` });

  return (
    <Card className="flex p-1 m-1 border rounded shadow-md">
      <div onClick={handleNavigate} className="flex items-center">
        <div>
          <Image
            src={data.images[0]}
            alt={data.name}
            className="object-contain"
            width={60}
            height={60}
          />
        </div>
        <Text>brand: {data?.brand}</Text>
        <div className=" ml-4">
          <Text>
            name: <b>{data.name}</b>
          </Text>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <Text>
          price: <b>{data.price}</b>
        </Text>
      </div>

      <Checkbox value={data._id} onChange={handleCheckBox} />
    </Card>
  );
}
