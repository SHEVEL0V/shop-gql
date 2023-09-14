/** @format */
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";
import { toast } from "react-toastify";
import OrderCard from "@/components/admin/orderCard";
import ListContainer from "@/components/container/containerPagination";
import FilterOrder from "@/components/admin/filterOrder";
import useSearchParams from "@/hooks/useSearchParams";
import { PrivateRoute } from "@/modules/router";
import useCheckBox from "@/hooks/useCheckBox";

export default function Orders() {
  const [ids, setIds] = useState<string[]>([]);
  const { params } = useSearchParams();
  const { handleCheckBox } = useCheckBox(setIds);

  const { loading, data, refetch } = useQuery(schemasGql.GET_ORDER, {
    variables: { query: params },
  });
  const [updateOrder] = useMutation(schemasGql.UPDATE_ORDER);

  const handleUpdateOrder = (status: string) =>
    updateOrder({ variables: { update: { ids, status } } })
      .then(() => {
        refetch();
        toast.success("success update order");
      })
      .catch(() => toast.error("error update order"));

  const boolean = ids.length === 0;

  const { result, count } = data?.getOrders || { result: [], count: 1 };

  return (
    <PrivateRoute>
      <FilterOrder updateOrder={handleUpdateOrder} disabled={boolean} />
      <ListContainer isLoading={loading} count={count}>
        {result.map((el: any, ind: string) => (
          <OrderCard key={ind} data={el} handleCheckBox={handleCheckBox} />
        ))}
      </ListContainer>
    </PrivateRoute>
  );
}
