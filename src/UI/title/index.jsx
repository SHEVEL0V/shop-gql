/** @format */

import React from "react";
import Typography from "@mui/material/Typography";

export default function Title({ children }) {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        flexGrow: 1,
        minWidth: "100px",
        display: { xs: "none", sm: "block" },
      }}
    >
      {children}
    </Typography>
  );
}
