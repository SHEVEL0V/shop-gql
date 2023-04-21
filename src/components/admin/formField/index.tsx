/** @format */

import React from "react";
import TextField from "@mui/material/TextField";

import s from "./style.module.css";

type Props = {
  form?: any[];
  data?: any;
  setForm: React.Dispatch<React.SetStateAction<{}>>;
  required?: boolean;
};

export default function FormField({
  form = [],
  data,
  setForm,
  required = false,
}: Props) {
  const handleInput = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
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
