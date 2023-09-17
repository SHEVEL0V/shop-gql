/** @format */

import React from "react";
import Button from "@mui/material/Button";

import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

type Props = {
  children?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BtbClean({ onClick, children }: Props) {
  return (
    <Button sx={{ width: "100%" }} onClick={onClick} variant="contained">
      {children} <CleaningServicesIcon />
    </Button>
  );
}
