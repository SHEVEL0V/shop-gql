/** @format */

import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function BtnDelete({ onClick }: Props) {
  return (
    <Button
      sx={{
        height: "60px",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <DeleteIcon />
    </Button>
  );
}
