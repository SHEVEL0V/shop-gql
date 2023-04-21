/** @format */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "../../../UI/autocomplete";
import Button from "@mui/material/Button";
import s from "./style.module.css";

import type { ItemParams, Product } from "@/types";
type Props = {
  params: { name: string }[];
  setForm: React.Dispatch<React.SetStateAction<any>>;
  form: Product;
};

export default function FormAddOpt({ params, setForm, form }: Props) {
  const options: ItemParams[] = form?.params || [];

  const setOptions = (arr: ItemParams[]) =>
    setForm((state: {}) => ({ ...state, params: arr }));

  const handleChangeInput = (field: string, value: string, index: number) =>
    setOptions(
      options.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );

  const handleAddOptions = () =>
    setOptions([...options, { name: "", value: "" }]);

  const handleDeleteOptions = (index: number) =>
    setOptions(options.filter((_, i) => index !== i));

  const autocomplete = params.map(({ name }) => name);

  return (
    <div className={s.container}>
      {options?.map((item, index) => (
        <div key={index} className={s.itemContainer}>
          <Autocomplete
            style={{ width: "50%" }}
            options={autocomplete}
            name="name"
            onChange={(value) => handleChangeInput("name", value, index)}
            value={item.name || ""}
          />

          <TextField
            sx={{ width: "100%", marginLeft: "10px" }}
            label={"value"}
            value={item.value || ""}
            onChange={(e) => handleChangeInput("value", e.target.value, index)}
          />
          <Button
            sx={{ marginLeft: "10px", height: "55px" }}
            variant="contained"
            onClick={() => handleDeleteOptions(index)}
          >
            delete
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddOptions}>
        ADD options
      </Button>
    </div>
  );
}
