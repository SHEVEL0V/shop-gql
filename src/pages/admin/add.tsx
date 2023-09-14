/** @format */
import { toast } from "react-toastify";
import { PrivateRoute } from "@/modules/router";
import FormAddItem from "@/components/admin/formAddItem";
import { useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";
import { uploadImgToStorage } from "@/services/fetch";

import type { Product } from "@/types";

export default function AddProduct() {
  const [addProduct, { loading }] = useMutation(schemasGql.ADD_PRODUCT, {
    refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
  });

  const handleAddProducts = async (value: Product, files: any) => {
    try {
      const images = files ? await uploadImgToStorage(files) : undefined;

      await addProduct({
        variables: { add: { ...value, images } },
      });

      console.log("Added product successfully");
    } catch {
      alert("error add products");
    }
  };

  return (
    <PrivateRoute>
      <FormAddItem mutation={handleAddProducts} loading={loading} />
    </PrivateRoute>
  );
}
