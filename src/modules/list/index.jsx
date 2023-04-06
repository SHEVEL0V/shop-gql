/** @format */

import React from "react";
import Sidebar from "../sidebar";
import CardProduct from "../../components/cardProduct";
import useSearchParams from "../../hooks/useSearchParams";
import ListContainer from "../../components/listContainer";

import { useQuery } from "@apollo/client";
import { schemasGql } from "../../gql";

import s from "./style.module.css";

export default function ListProducts() {
  const { params: query } = useSearchParams();

  console.log(query);

  const { loading, data } = useQuery(schemasGql.GET_PRODUCTS, {
    variables: { query },
  });

  const { results, count } = data?.getProducts || [];

  return (
    <div className={s.container}>
      <Sidebar />
      <ListContainer count={count} isLoading={loading}>
        <div className={s.containerProducts}>
          {results?.map((el) => (
            <CardProduct key={el._id} data={el} />
          ))}
        </div>
      </ListContainer>
    </div>
  );
}
