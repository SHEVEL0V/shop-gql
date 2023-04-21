/** @format */

import React from "react";
import TextField from "@mui/material/TextField";
import AutoComp from "@mui/material/Autocomplete";
import { OverridableStringUnion } from "@mui/types";

type Props = {
  style?: { [nameParam: string]: string };
  size?: OverridableStringUnion<"medium" | "small">;
  name?: string;
  onChange: (value: string) => void;
  freeSolo?: boolean;
  options?: string[];
  value?: string;
};

export default function Autocomplete({
  options = [],
  name,
  onChange,
  value,
  size = "medium",
  freeSolo = true,
  style = { marginBottom: "10px" },
}: Props) {
  return (
    <AutoComp
      freeSolo={freeSolo}
      sx={style}
      options={options}
      inputValue={value}
      onInputChange={(_, v) => onChange(v)}
      // getOptionLabel={(option) => option[name] || ""}
      // isOptionEqualToValue={(option, value) => option[name] === value[name]}
      size={size}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}
