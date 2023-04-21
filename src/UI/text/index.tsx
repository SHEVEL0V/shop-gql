/** @format */
import Typography from "@mui/material/Typography";

import React from "react";

type Props = {
  children: React.ReactNode;
  size?: number;
  weight?: number;
  color?: string;
};

export default function Text({
  children,
  size = 16,
  weight = 400,
  color = "text.secondary",
}: Props) {
  return (
    <Typography sx={{ fontSize: size, fontWeight: weight }} color={color}>
      {children}
    </Typography>
  );
}
