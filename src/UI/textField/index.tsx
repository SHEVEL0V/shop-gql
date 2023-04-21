/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  label: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function TextFieldComponent({
  label,
  options = [],
  onChange,
  value,
}: Props) {
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
