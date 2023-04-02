/** @format */

import React, { useState } from "react";
import ListRemove from "../../components/admin/listRemove";
import Sidebar from "../sidebar";
import Btn from "../../UI/btn";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import useCheckBox from "../../hooks/useCheckBox";
import ListContainer from "../../components/listContainer";

import { useQuery, useMutation } from "@apollo/client";
import { schemasGql } from "../../gql";

import s from "./style.module.css";

export default function ListProductsAdmin() {
  const { params: query } = useSearchParamsCustom();
  const [options, setOptions] = useState([]);

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const { loading, data } = useQuery(schemasGql.GET_PRODUCTS, {
    variables: { query },
  });

  const [removeProduct] = useMutation(schemasGql.REMOVE_PRODUCT);

  const products = data?.getProducts;

  const handleRemoveProducts = () =>
    removeProduct({ variables: { ids: options } });

  return (
    <div className={s.containerList}>
      <Sidebar options={data?.desc} isLoading={loading}>
        <Btn onClick={handleRemoveProducts} loading={loading}>
          remove
        </Btn>
      </Sidebar>
      <ListContainer isLoading={loading} count={data?.count}>
        {products?.results.map((e) => (
          <ListRemove
            data={e}
            key={e._id}
            handleCheckBox={handleCheckBoxArray}
          />
        ))}
      </ListContainer>
    </div>
  );
}
