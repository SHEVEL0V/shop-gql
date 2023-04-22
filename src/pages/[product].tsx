/** @format */
import { useRouter } from "next/router";
import Product from "@/modules/product";
import Loader from "@/UI/loader";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_ID } from "@/gql/schemas/products";
import Error from "@/pages/404";

export default function PageProduct() {
  const id = useRouter().asPath.split("-").pop() || "";

  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { id },
  });

  const product = data?.getProductById || {};

  if (error) return <Error />;
  return <>{loading ? <Loader /> : <Product data={product} id={id} />}</>;
}
