/** @format */

import React from "react";
import P from "@mui/material/Pagination";
import Autocomplete from "../UI/autocomplete";
import useSearchParamsCustom from "../hooks/useSearchParams";
import { useRouter } from "next/router";

type Props = {
  count: number;
};

export default function Pagination({ count }: Props) {
  const optionsLimit = ["20", "50", "100", "200"];
  const router = useRouter();
  const { setParams } = useSearchParamsCustom();

  const { limit, page: paramsPage } = router.query;
  const page = Number(paramsPage) || 1;

  const countPagination = Math.ceil(count / Number(limit || 6));

  return (
    <div className="w-full mt-auto flex justify-center p-2 ">
      <P
        page={page}
        count={countPagination}
        color="primary"
        onChange={(_, page) => setParams({ page })}
      />
      <Autocomplete
        size="small"
        name="limit"
        options={optionsLimit}
        onChange={(value) => setParams({ page: 1, limit: value })}
      />
    </div>
  );
}
