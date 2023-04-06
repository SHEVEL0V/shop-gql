/** @format */

import React, { useState } from "react";
import OrderCard from "../../components/admin/orderCard";
import { useQuery, useMutation } from "@apollo/client";
import { schemasGql } from "../../gql";
import useCheckBox from "../../hooks/useCheckBox";
import FilterOrder from "../../components/admin/filterOrder";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import ListContainer from "../../components/listContainer";
import { toast } from "react-toastify";

import s from "./style.module.css";

export default function Orders() {
  const [ids, setIds] = useState([]);
  const { setParams, params } = useSearchParamsCustom();

  const disabled = ids.length === 0;

  const { loading, data, refetch } = useQuery(schemasGql.GET_ORDER, {
    variables: { query: params },
  });

  const res = data?.getOrders || [];

  const { handleCheckBoxArray } = useCheckBox(setIds);
  const [updateOrder] = useMutation(schemasGql.UPDATE_ORDER);

  const handleUpdateOrder = (status) =>
    updateOrder({ variables: { update: { ids, status } } })
      .then(() => {
        refetch();
        toast.success("success update order");
      })
      .catch(() => toast.error("error update order"));

  return (
    <div className={s.containerList}>
      <FilterOrder
        setParams={setParams}
        updateOrder={handleUpdateOrder}
        disabled={disabled}
      />
      <ListContainer isLoading={loading}>
        {res.map((el, ind) => (
          <OrderCard key={ind} data={el} handleCheckBox={handleCheckBoxArray} />
        ))}
      </ListContainer>
    </div>
  );
}
