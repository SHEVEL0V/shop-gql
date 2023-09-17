/** @format */

import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import ProductCardAdmin from "@/components/admin/productCard";
import Sidebar from "@/modules/sidebar";
import { PrivateRoute } from "@/modules/router";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import { useCheckBox } from "@/hooks/useCheckBox";
import ListContainer from "@/components/container/containerPagination";
import { useQuery, useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";

export default function List() {
  const { params: query } = useSearchParamsCustom();
  const [options, setOptions] = useState<string[]>([]);
  const disabled = options.length === 0;

  const { handleCheckBox } = useCheckBox(setOptions);

  const { loading, data, refetch } = useQuery(schemasGql.GET_PRODUCTS, {
    variables: { query },
  });

  const [removeProduct, { loading: loadingRemove }] = useMutation(
    schemasGql.REMOVE_PRODUCT,
    {
      refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
    }
  );

  const handleRemoveProducts = () =>
    removeProduct({ variables: { ids: options } }).then(() => refetch());

  const { results, count } = data?.getProducts || { results: [], count: 1 };

  return (
    <PrivateRoute>
      <Sidebar>
        <div className="p-2">
          <LoadingButton
            sx={{ width: "100%" }}
            variant="contained"
            color="error"
            disabled={disabled}
            onClick={handleRemoveProducts}
            loading={loadingRemove}
          >
            remove
          </LoadingButton>
        </div>
      </Sidebar>
      <ListContainer isLoading={loading} count={count}>
        {results?.map((data: any) => (
          <ProductCardAdmin
            data={data}
            key={data._id}
            handleCheckBox={handleCheckBox}
          />
        ))}
      </ListContainer>
    </PrivateRoute>
  );
}
