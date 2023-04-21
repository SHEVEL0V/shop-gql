/** @format */
import { useMutation, useQuery } from "@apollo/client";
import { schemasGql } from "@/gql";
import { useRouter } from "next/router";
import { filterRes } from "@/helpers/filterRes";
import ProductsUpdateForm from "@/components/admin/formUpdate";
import Loader from "@/UI/loader";
import { toast } from "react-toastify";
import { PrivateRoute } from "@/modules/router";
import { uploadImgToStorage } from "@/services/fetch";

import type { Product } from "@/types";

export default function UpdateProducts() {
  const { id } = useRouter().query;

  const { data, loading } = useQuery(schemasGql.GET_PRODUCTS_BY_ID, {
    variables: { id },
  });

  const [updateProduct, { loading: loadUpdate }] = useMutation(
    schemasGql.UPDATE_PRODUCT
  );

  const res = filterRes(data?.getProductById);

  const handleUpdateProduct = async (value: Product, file: any) => {
    const img = file ? await uploadImgToStorage(file) : undefined;

    await updateProduct({
      variables: { update: { id, ...value, img } },
    })
      .then(() => toast.success("Product updated successfully"))
      .catch(() => toast.error("Product updated error"));
  };

  return (
    <PrivateRoute>
      {loading ? (
        <Loader />
      ) : (
        <ProductsUpdateForm
          data={res}
          title="Update"
          mutation={handleUpdateProduct}
        />
      )}
    </PrivateRoute>
  );
}
