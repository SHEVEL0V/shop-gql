/** @format */

import Sidebar from "../modules/sidebar";
import { useAppSelector } from "@/redux/hooks";
import useSearchParams from "../hooks/useSearchParams";
import CardProduct from "@/modules/cardProduct";
import ContainerPagination from "@/components/container/containerPagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@apollo/client";
import { schemasGql } from "../gql";

import { Product } from "@/types";

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
        <ContainerPagination count={count} isLoading={loading}>
          <div className="grid p-3 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {results.map((el: Product) => (
              <CardProduct key={el._id} data={el} />
            ))}
          </div>
        </ContainerPagination>
      )}
    </div>
  );
}
