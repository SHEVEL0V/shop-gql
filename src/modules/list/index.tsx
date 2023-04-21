/** @format */

import React from "react";
import CardProduct from "../cardProduct";
import ListContainer from "@/components/listContainer";
import type { ListProducts } from "@/types";
import s from "./style.module.css";

import type { Product } from "@/types";

type Props = { data: Product[]; isLoading: boolean; count: number };

export default function ListProducts({ data, isLoading, count }: Props) {
  return (
    <ListContainer count={count} isLoading={isLoading}>
      <div className={s.containerProducts}>
        {data.map((el) => (
          <CardProduct key={el._id} data={el} />
        ))}
      </div>
    </ListContainer>
  );
}
