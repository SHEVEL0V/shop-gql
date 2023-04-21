/** @format */
import type { Product } from "@/types";
type Obg = {
  [key: string]: string;
};

export const filterRes = (data: Obg) => {
  if (data?.__typename) {
    const { __typename, ...filteredData } = data;

    return filteredData;
  }
  return data;
};
