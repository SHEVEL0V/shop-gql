/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function TextFieldComponent({
  label,
  options = [],
  onChange,
  value,
}) {
  return (
    <TextField
      select
      label={label}
      name={label}
      defaultValue=""
      value={value}
      variant="standard"
      sx={{ width: "100%", margin: "2px" }}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
