/** @format */

import React from "react";
import TextField from "@mui/material/TextField";

import s from "./style.module.css";

export default function FormMain({
  form = [],
  data,
  setForm,
  required = false,
}) {
  const handleInput = ({ target: { name, value } }) =>
    setForm((state) => ({
      ...state,
      [name]: name === "price" ? Number(value) : value,
    }));

  return (
    <div className={s.textInput}>
      {form?.map((item, index) => (
        <TextField
          required={required}
          sx={{ marginBottom: "10px" }}
          key={index}
          name={item}
          label={item}
          value={data[item] || ""}
          onChange={handleInput}
        />
      ))}
    </div>
  );
}
