/** @format */

import React from "react";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import According from "@/UI/according";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  title: string;
  value: string[];
};

export default function AccordingList({ title, value }: Props) {
  const { setParams, getParamByKey } = useSearchParamsCustom();
  const param = getParamByKey(title);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    checked
      ? setParams({ page: 1, [title]: [...param, value] })
      : setParams({ page: 1, [title]: param.filter((el) => value !== el) });
  };

  return (
    <According title={title}>
      {value.map((el) => (
        <div
          key={el}
          className="flex items-center mb-1  bg-slate-100
           dark:bg-slate-500 dark:border-gray-800"
        >
          <Checkbox
            name={title}
            value={el}
            checked={param.includes(el)}
            onChange={handleCheckBox}
          />
          <span className="ml-2 mr-auto text-sm">{el}</span>
        </div>
      ))}
    </According>
  );
}
