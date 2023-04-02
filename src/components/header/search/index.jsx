/** @format */

import React, { useMemo } from "react";

import debounce from "lodash.debounce";
import useSearchParams from "../../../hooks/useSearchParams";
import SearchInput from "../../../UI/inputSearch";

export default function Search() {
  const { setParams } = useSearchParams();

  const debouncedChangeHandler = useMemo(
    () => debounce((e) => setParams({ search: e.target.value.trim() }), 300),
    [setParams]
  );

  return (
    <SearchInput onChange={debouncedChangeHandler} sx={{ marginRight: 2 }} />
  );
}
