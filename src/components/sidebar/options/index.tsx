/** @format */

import React, { useState } from "react";
import BtnSearch from "@/UI/btnSearch";
import Checkbox from "@mui/material/Checkbox";
import According from "@/UI/according";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import s from "./style.module.css";
import { useSetFormOptions } from "@/hooks/useSetFormOptions";

type Props = {
  options: { name: string; value: string[] }[];
};

export default function Options({ options = [] }: Props) {
  const [form, setForm] = useState<any>({});

  const { setParams } = useSearchParamsCustom();

  const handelSearch = () => setParams({ ...form, page: 1 });

  const { handelChange } = useSetFormOptions(setForm);

  return (
    <According title="options">
      {options?.map(({ name, value }, ind) => (
        <According
          key={ind}
          title={name}
          border={form[name] ? form[name].length > 0 : false}
        >
          {value.map((el) => (
            <div key={el} className={s.container}>
              <span className={s.name}>{el}</span>
              <Checkbox name={name} value={el} onChange={handelChange} />
            </div>
          ))}
        </According>
      ))}
      <p></p>
      <BtnSearch onClick={handelSearch}>Search</BtnSearch>
    </According>
  );
}
