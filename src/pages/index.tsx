/** @format */

import Sidebar from "../modules/sidebar";
import { useAppSelector } from "@/redux/hooks";
import useSearchParams from "../hooks/useSearchParams";
import ListProducts from "../modules/list";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@apollo/client";
import { schemasGql } from "../gql";

export default function Main() {
  const { params: query } = useSearchParams();
  const isOpen = useAppSelector((store) => store.button.menu);
  const matches = useMediaQuery("(min-width:480px)");
  const visibility = matches ? true : !isOpen;

  const { loading, data } = useQuery(schemasGql.GET_PRODUCTS, {
    variables: { query },
  });

  const { results, count } = data?.getProducts || { results: [], count: 1 };

  return (
    <div className="flex w-full ">
      <Sidebar />
      {visibility && (
        <ListProducts data={results} count={count} isLoading={loading} />
      )}
    </div>
  );
}
