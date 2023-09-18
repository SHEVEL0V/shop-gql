/** @format */

import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import useSearchParamsCustom from "@/hooks/useSearchParams";

export default function Sort() {
  const { setParams } = useSearchParamsCustom();
  const filter = [
    { name: "minPrice", value: "min" },
    { name: "maxPrice", value: "max" },
    { name: "newProduct", value: "new" },
    { name: "oldProduct", value: "old" },
  ];

  return (
    <Autocomplete
      className="my-2"
      sx={{
        "& hover:": {
          backgroundColor: "#black",
        },
      }}
      disablePortal
      options={filter}
      getOptionLabel={(option) => option.name || ""}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      onChange={(_, v) => setParams({ sort: v?.value })}
      renderInput={(params) => <TextField {...params} label={"sort"} />}
    />
  );
}
