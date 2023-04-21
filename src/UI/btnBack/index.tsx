/** @format */
import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BtnBack({ children, onClick }: Props) {
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
