/** @format */
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function BtnSearch({ onClick, children, loading }) {
  return (
    <Button
      variant="contained"
      endIcon={<SearchIcon />}
      onClick={onClick}
      loading={loading}
    >
      {children}
    </Button>
  );
}
