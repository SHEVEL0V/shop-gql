/** @format */

import React, { useState } from "react";
import BtnSearch from "../../../UI/btnSearch";
import Checkbox from "@mui/material/Checkbox";
import According from "../../../UI/according";
import useCheckBox from "../../../hooks/useCheckBox";
import useSearchParamsCustom from "../../../hooks/useSearchParams";

import s from "./style.module.css";

export default function Options({ options = [] }) {
  const [form, setForm] = useState({});

  const { setParams } = useSearchParamsCustom();

  const handelSearch = () => setParams(form);

  const { handleCheckBoxObject } = useCheckBox(setForm);

  return (
    <According title="options">
      {options?.map((item, ind) => (
        <According
          key={ind}
          title={item?.name}
          border={form[item]?.length || false}
        >
          {item?.value?.map((el, ind) => (
            <div key={el} className={s.container}>
              <span className={s.name}>{el}</span>
              <Checkbox
                name={item?.name}
                value={el}
                onChange={handleCheckBoxObject}
              />
            </div>
          ))}
        </According>
      ))}
      <p></p>
      <BtnSearch onClick={handelSearch}>Search</BtnSearch>
    </According>
  );
}
