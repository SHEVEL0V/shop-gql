/** @format */

import React from "react";
import Button from "@mui/material/Button";

import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

export default function BtbClean({ onClick }) {
  return (
    <Button onClick={onClick} variant="contained">
      <CleaningServicesIcon />
    </Button>
  );
}
