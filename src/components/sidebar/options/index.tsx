/** @format */

import React, { useState } from "react";
import BtnSearch from "@/UI/btnSearch";
import Checkbox from "@mui/material/Checkbox";
import According from "@/UI/according";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import s from "./style.module.css";

type Props = {
  options: { name: string; value: string[] }[];
};

type Obj = { [field: string]: string[] };

export default function Options({ options = [] }: Props) {
  const [form, setForm] = useState({});

  const { setParams } = useSearchParamsCustom();

  const handelSearch = () => setParams({ ...form, page: 1 });

  const handleSetForm = ({
    target: { value, checked, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    checked
      ? setForm((state: Obj) =>
          state[name]
            ? { ...state, [name]: [...state[name], value] }
            : { ...state, [name]: [value] }
        )
      : setForm((state: Obj) => ({
          ...state,
          [name]: state[name].filter((item) => item !== value),
        }));
  };

  return (
    <According title="options">
      {options?.map((item, ind) => (
        <According key={ind} title={item?.name}>
          {item?.value.map((el) => (
            <div key={el} className={s.container}>
              <span className={s.name}>{el}</span>
              <Checkbox name={item?.name} value={el} onChange={handleSetForm} />
            </div>
          ))}
        </According>
      ))}
      <p></p>
      <BtnSearch onClick={handelSearch}>Search</BtnSearch>
    </According>
  );
}
