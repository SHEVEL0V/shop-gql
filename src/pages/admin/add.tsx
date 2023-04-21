/** @format */
import { toast } from "react-toastify";
import { PrivateRoute } from "@/modules/router";
import ProductsUpdateForm from "@/components/admin/formUpdate";
import { useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";
import { uploadImgToStorage } from "@/services/fetch";

import type { Product } from "@/types";

export default function AddProduct() {
  const [addProduct] = useMutation(schemasGql.ADD_PRODUCT, {
    refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
  });

  const handleAddProducts = async (value: Product, file: any) => {
    try {
      const img = file ? await uploadImgToStorage(file) : undefined;
      await addProduct({
        variables: { add: { ...value, img } },
      });
      console.log("Added product successfully");
    } catch {
      console.log("error add products");
    }
  };

  return (
    <PrivateRoute>
      <ProductsUpdateForm mutation={handleAddProducts} title="Add" />
    </PrivateRoute>
  );
}
