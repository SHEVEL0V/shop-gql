/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "@/UI/according";
import useCheckBox from "@/hooks/useCheckBox";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import { Button } from "@mui/material";

import s from "./style.module.css";

type Props = { data: string[]; title: string };

export default function AccordingList({ data = [], title }: Props) {
  const { setParams, getParamByKey } = useSearchParamsCustom();

  const [options, setOptions] = useState(getParamByKey(title));

  const { handleCheckBox } = useCheckBox(setOptions);

  const handlerClickSearch = () => setParams({ page: 1, [title]: options });

  return (
    <According title={title} border={options?.length > 0}>
      {data.map((value, ind) => (
        <div key={ind} className={s.container}>
          <span className={s.name}>{value}</span>
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
