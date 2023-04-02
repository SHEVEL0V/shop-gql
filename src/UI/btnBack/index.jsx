/** @format */
import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BtnBack({ children, onClick }) {
  return (
    <Button
      color="inherit"
      variant="text"
      startIcon={<ArrowBackIcon />}
      sx={{ marginInline: "5px" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
