/** @format */

import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

type Props = { children: ReactNode };

export default function Title({ children }: Props) {
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
