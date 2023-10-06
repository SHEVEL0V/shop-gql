/** @format */

import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_TYPE_SIMILAR } from "@/gql/schemas/products";
import { useRouter } from "next/router";
import CategoryIcon from "@mui/icons-material/Category";

type Props = {
  type: string;
};

type Item = {
  images: string[];
  name: string;
  price: string;
  brand: string;
  _id: string;
};

export default function SimilarProduct({ type }: Props) {
  const router = useRouter();
  const { data: resProductsType, loading } = useQuery(
    GET_PRODUCTS_BY_TYPE_SIMILAR,
    {
      variables: { type },
    }
  );

  const products = resProductsType?.getProductByType || [];

  const handleClickCard = (brand: string, id: string) =>
    router.push({ pathname: `/${brand}-${id}` });

  return (
    <div className="border rounded">
      <h2 className="flex text-lg p-2 bg-slate-300   ">
        <CategoryIcon className="mr-2" />
        Similar products:
      </h2>
      <div className="w-full h-[290px] overflow-auto relative  bg-slate-100 border-2 p-1">
        <div className="absolute   flex gap-2  border-slate-300 ">
          {products.map((item: Item, ind: number) => (
            <div
              key={ind}
              onClick={() => handleClickCard(item.brand, item._id)}
              className="flex flex-col border hover:border-orange-400
                      w-48  p-1 rounded shadow bg-slate-300 dark:bg-slate-400"
            >
              <Image
                width={200}
                height={200}
                src={item.images[0]}
                alt={item.name}
              />
              <div className="h-14 mt-auto text-sm">{item.name}</div>
              <div className="text-green-700 font-bold">
                &#8372;{item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
