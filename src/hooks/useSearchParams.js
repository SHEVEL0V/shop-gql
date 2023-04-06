/** @format */
import { useSearchParams } from "react-router-dom";

export default function useSearchParamsCustom() {
  const [searchParams, setSearchParams] = useSearchParams();

  //  ----get search params--------------------
  const params = Object.fromEntries([...searchParams]);

  //  ----filter search params--------------------
  const filterParams = (obj) => {
    const query = {};
    const params = [];
    const field = [
      "limit",
      "sort",
      "page",
      "search",
      "brand",
      "type",
      "price",
      "date",
    ];

    Object.keys(obj).map((key) =>
      field.includes(key)
        ? (query[key] = obj[key])
        : params.push({ name: key, value: obj[key] })
    );

    const options = params.length !== 0 ? params : undefined;
    return { ...query, options };
  };

  // ----get search params by key--------------------
  const getParams = (key) => params[key]?.split("-") || [];

  // -----handel value--------------------
  const handleValue = (value) =>
    typeof value !== "object" && value !== ""
      ? value
      : value?.length !== 0 && value
      ? value?.join("-")
      : [];

  //-----handel params--------------------
  const handleParams = (data) => {
    const res = {};

    Object.keys(data).map((key) => (res[key] = handleValue(data[key])));

    return res;
  };

  //-------set params--------------------
  const setParams = (obj) => {
    setSearchParams({ ...params, ...handleParams(obj) });
  };

  return { setParams, getParams, params: filterParams(params) };
}
