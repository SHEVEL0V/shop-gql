/** @format */

import Sidebar from "../modules/sidebar";

import useSearchParams from "../hooks/useSearchParams";
import ListProducts from "../modules/list";

import { useQuery } from "@apollo/client";
import { schemasGql } from "../gql";

export default function Main() {
  const { params: query } = useSearchParams();

  const { loading, data } = useQuery(schemasGql.GET_PRODUCTS, {
    variables: { query },
  });

  const { results, count } = data?.getProducts || { results: [], count: 1 };

  return (
    <div className="flex w-full ">
      <Sidebar />
      <ListProducts data={results} count={count} isLoading={loading} />
    </div>
  );
}
