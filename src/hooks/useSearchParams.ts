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
    const FIELD = [
      "limit",
      "sort",
      "page",
      "search",
      "brand",
      "type",
      "price",
      "status",
      "date",
    ];

    const initialValues: { params?: ItemParams[] } = {};

    return Object.entries(params).reduce(
      (acc, [name, value]) =>
        FIELD.includes(name)
          ? { ...acc, [name]: value }
          : {
              ...acc,
              params: acc.params
                ? [...acc.params, { name, value }]
                : [{ name, value }],
            },

      initialValues
    );
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
  const getParamByKey = (key: string) => {
    const params = new URLSearchParams(document.location.search);
    const getParams = params.get(key) || undefined;
    return getParams ? getParams.split("-") : [];
  };

  //-------set params--------------------
  const setParams = (value: ValueType) =>
    router.push({ query: handleParams(value) });

  //-------clean params--------------------
  const cleanParams = () => router.push({ query: {} });

  return {
    setParams,
    cleanParams,
    getParamByKey,
    params: filterParams(params),
  };
}
