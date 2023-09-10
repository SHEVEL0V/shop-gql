/** @format */
import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BtnBack({ onClick }: Props) {
  return (
    <Button
      color="inherit"
      variant="text"
      startIcon={<ArrowBackIosIcon />}
      onClick={onClick}
    ></Button>
  );
}
