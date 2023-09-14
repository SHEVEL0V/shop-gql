/** @format */
import { useMutation, useQuery } from "@apollo/client";
import { schemasGql } from "@/gql";
import { useRouter } from "next/router";
import FormUpdateItem from "@/components/admin/formUpdateItem";
import Loader from "@/UI/loader";
import { toast } from "react-toastify";
import { PrivateRoute } from "@/modules/router";
import { uploadImgToStorage } from "@/services/fetch";

import type { Product } from "@/types";

export default function UpdateProducts() {
  const { id } = useRouter().query;

  //------get-product--------------------------------
  const { data, loading } = useQuery(schemasGql.GET_PRODUCTS_BY_ID, {
    variables: { id },
  });
  const product = data?.getProductById;

  //-------update-product--------------------------------
  const [updateProduct, { loading: loadingUpdate }] = useMutation(
    schemasGql.UPDATE_PRODUCT
  );

  const handleUpdateProduct = async (value: Product, file: any) => {
    try {
      const images = file ? await uploadImgToStorage(file) : undefined;

      await updateProduct({
        variables: { update: { ...value, images } },
      });

      toast.success("Product updated successfully");
    } catch {
      toast.error("Product updated error");
    }
  };

  return (
    <PrivateRoute>
      {loading ? (
        <Loader />
      ) : (
        <FormUpdateItem
          loading={loadingUpdate}
          data={product}
          title="Update"
          mutation={handleUpdateProduct}
        />
      )}
    </PrivateRoute>
  );
}
