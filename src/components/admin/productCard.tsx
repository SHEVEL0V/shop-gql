/** @format */

import React from "react";

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
    <div
      className="sm:flex p-1 m-1 border rounded shadow-md
     dark:bg-slate-700 dark:border-gray-800"
    >
      <div onClick={handleNavigate} className="flex items-center">
        <div className="mr-2">
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
          <Text>name: {data.name}</Text>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <Text>price:{String(data.price)}</Text>
      </div>

      <Checkbox value={data._id} onChange={handleCheckBox} />
    </div>
  );
}
