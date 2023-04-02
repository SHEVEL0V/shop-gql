/** @format */

import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Sort({ onSort }) {
  const filter = [
    { name: "minPrice", value: "min" },
    { name: "maxPrice", value: "max" },
    { name: "newProduct", value: "new" },
    { name: "oldProduct", value: "old" },
  ];

  const handleChange = (e, v) =>
    v !== null ? onSort({ sort: v.value }) : onSort({ sort: null });

  return (
    <Autocomplete
      sx={{ marginBottom: "10px" }}
      disablePortal
      options={filter}
      getOptionLabel={(option) => option.name || ""}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label={"sort"} />}
    />
  );
}
