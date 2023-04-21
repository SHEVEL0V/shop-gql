/** @format */
import { useRouter } from "next/router";

import type { ObjType, ItemParams } from "@/types";

type ValueType = {
  [key: string]: string[] | string | null | undefined | number | number[];
};

type Query = { [key: string]: string | number | null };

export default function useSearchParamsCustom() {
  const router = useRouter();
  const params: {} = router.query;

  //  ----filter search params--------------------
  const filterParams = (params: ObjType) => {
    const query: Query = {};
    const array: ItemParams[] = [];

    const FIELD = [
      "limit",
      "sort",
      "page",
      "search",
      "brand",
      "type",
      "price",
      "date",
    ];

    Object.keys(params).map((key) =>
      FIELD.includes(key)
        ? (query[key] = params[key])
        : array.push({ name: key, value: params[key] })
    );

    const options = array.length > 0 ? { options: array } : undefined;

    return { ...query, ...options };
  };

  // -----handel value--------------------
  const handleValue = (value: string[] | string | number) =>
    typeof value === "object" ? value.join("-") : value;

  //-----handel params--------------------
  const handleParams = (value: ValueType) => {
    const allParams: ObjType = { ...params, ...value };
    const res: Query = {};

    Object.keys(allParams).forEach((key) => {
      if (allParams[key]) {
        if (allParams[key].length > 0 || typeof allParams[key] === "number") {
          res[key] = handleValue(allParams[key]);
        }
      }
    });

    return res;
  };

  //----get search params by key--------------------
  const getParamByKey = (key: string) =>
    router.query[key] ? String(router.query[key]).split("-") : [];

  //-------set params--------------------
  const setParams = (value: ValueType) =>
    router.push({ query: handleParams(value) });

  return { setParams, getParamByKey, params: filterParams(params) };
}
