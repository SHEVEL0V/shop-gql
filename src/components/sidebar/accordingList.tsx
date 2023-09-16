/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "@/UI/according";
import useSearchParamsCustom from "@/hooks/useSearchParams";

type Props = { data: string[]; title: string };

export default function AccordingList({ data = [], title }: Props) {
  const { setParams, getParamByKey } = useSearchParamsCustom();

  const param = getParamByKey(title);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const param = getParamByKey(title);
    const { checked, value } = e.target;
    checked
      ? setParams({ page: 1, [title]: [...param, value] })
      : setParams({ page: 1, [title]: param.filter((el) => value !== el) });
  };

  return (
    <According title={title}>
      {data.map((value, ind) => (
        <div key={ind} className="flex items-center   border-t">
          <Checkbox
            name={title}
            value={value}
            onChange={handleCheckBox}
            checked={param.includes(value)}
          />
          <span className="ml-2 mr-auto">{value}</span>
        </div>
      ))}
    </According>
  );
}
