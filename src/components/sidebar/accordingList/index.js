/** @format */

import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import According from "../../../UI/according";
import Btn from "../../../UI/btn";
import useCheckBox from "../../../hooks/useCheckBox";

import s from "./style.module.css";
import useSearchParamsCustom from "../../../hooks/useSearchParams";

export default function AccordingList({ data = [], title }) {
  const { setParams, getParams } = useSearchParamsCustom();
  const [options, setOptions] = useState(getParams(title));

  const { handleCheckBoxArray } = useCheckBox(setOptions);

  const handlerClickSearch = () => setParams({ page: 1, [title]: options });

  return (
    <According title={title} border={options.length !== 0}>
      {data.map((value, ind) => (
        <div key={ind} className={s.container}>
          <span className={s.name}>{value}</span>
          <Checkbox
            name={title}
            value={value}
            onChange={handleCheckBoxArray}
            checked={options.includes(value)}
          />
        </div>
      ))}
      <Btn onClick={handlerClickSearch}>search</Btn>
    </According>
  );
}
