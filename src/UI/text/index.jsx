/** @format */
import Typography from "@mui/material/Typography";

import React from "react";

export default function Text({
  children,
  size = 16,
  weight = 400,
  color = "text.secondary",
}) {
  return (
    <Typography sx={{ fontSize: size, fontWeight: weight }} color={color}>
      {children}
    </Typography>
  );
}
