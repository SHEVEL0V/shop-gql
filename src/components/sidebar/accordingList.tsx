/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "@/UI/according";
import useCheckBox from "@/hooks/useCheckBox";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import { Button } from "@mui/material";

type Props = { data: string[]; title: string };

export default function AccordingList({ data = [], title }: Props) {
  const { setParams, getParamByKey } = useSearchParamsCustom();

  const [options, setOptions] = useState<string[]>(getParamByKey(title));

  const { handleCheckBox } = useCheckBox(setOptions);

  const handlerClickSearch = () => setParams({ page: 1, [title]: options });

  return (
    <According title={title} border={options?.length > 0}>
      {data.map((value, ind) => (
        <div
          key={ind}
          className="flex items-center mb-2 bg-slate-100 border rounded"
        >
          <span className="ml-2 mr-auto">{value}</span>
          <Checkbox
            name={title}
            value={value}
            onChange={handleCheckBox}
            checked={options.includes(value)}
          />
        </div>
      ))}
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        onClick={handlerClickSearch}
      >
        search
      </Button>
    </According>
  );
}
