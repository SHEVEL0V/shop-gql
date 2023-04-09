/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "../../../UI/autocomplete";
import Button from "@mui/material/Button";
import s from "./style.module.css";

export default function FormAddOpt({ form, setForm, params = {} }) {
  const options = form?.params || [];

  const setOptions = (arr) => setForm((state) => ({ ...state, params: arr }));

  const handleChangeInput = (value, index, key) =>
    setOptions(
      options.map((el, i) => (i === index ? { ...el, [key]: value } : el))
    );

  const handleAddOptions = () =>
    setOptions([...options, { name: "", value: "" }]);

  const handleDeleteOptions = (index) =>
    setOptions(options.filter((_, i) => index !== i));

  const autocomplete = params.map(({ name }) => name);

  return (
    <div className={s.container}>
      {options?.map((item, i) => (
        <div key={i} className={s.itemContainer}>
          <Autocomplete
            style={{ width: "50%" }}
            options={autocomplete}
            name="name"
            onChange={(_, v) => handleChangeInput(v, i, "name")}
            value={item.name || ""}
          />

          <TextField
            sx={{ width: "100%", marginLeft: "10px" }}
            label={"value"}
            value={item.value || ""}
            onChange={(e) => handleChangeInput(e.target.value, i, "value")}
          />
          <Button
            sx={{ marginLeft: "10px", height: "55px" }}
            variant="contained"
            onClick={() => handleDeleteOptions(i)}
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
