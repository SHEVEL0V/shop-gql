/** @format */
import { useSearchParams } from "react-router-dom";

export default function useSearchParamsCustom() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const getParams = (key) => params[key]?.split("-") || [];

  const handleValue = (value) =>
    typeof value !== "object" && value !== ""
      ? value
      : value?.length !== 0 && value
      ? value?.join("-")
      : [];

  const handleParams = (data) => {
    const res = {};

    Object.keys(data).map((key) => (res[key] = handleValue(data[key])));

    return res;
  };

  const setParams = (obj) => {
    setSearchParams({ ...params, ...handleParams(obj) });
  };

  return { setParams, getParams, params };
}
