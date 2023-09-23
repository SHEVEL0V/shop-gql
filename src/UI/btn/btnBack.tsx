/** @format */
import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BtnBack({ onClick }: Props) {
  return (
    <Button
      sx={{ padding: 0 }}
      color="inherit"
      variant="text"
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </Button>
  );
}
