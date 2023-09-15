/** @format */
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";
import { toast } from "react-toastify";
import OrderCard from "@/components/admin/orderCard";
import ListContainer from "@/components/container/containerPagination";
import FilterOrder from "@/components/admin/filterOrder";
import useSearchParams from "@/hooks/useSearchParams";
import { PrivateRoute } from "@/modules/router";

export default function Orders() {
  const { params } = useSearchParams();

  const { loading, data, refetch } = useQuery(schemasGql.GET_ORDER, {
    variables: { query: params },
  });
  const [updateOrder] = useMutation(schemasGql.UPDATE_ORDER);

  const handleUpdateOrder = (_id: string, status: string) => {
    updateOrder({ variables: { update: { _id, status } } })
      .then(() => {
        refetch();
      })
      .catch(() => toast.error("error update order"));
  };

  const { result, count } = data?.getOrders || { result: [], count: 1 };

  return (
    <PrivateRoute>
      <FilterOrder />
      <ListContainer isLoading={loading} count={count}>
        {result.map((el: any, ind: string) => (
          <OrderCard key={ind} data={el} updateOrder={handleUpdateOrder} />
        ))}
      </ListContainer>
    </PrivateRoute>
  );
}
