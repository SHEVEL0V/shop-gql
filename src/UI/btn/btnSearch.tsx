/** @format */
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";

type Props = {
  children?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BtnSearch({ onClick, children }: Props) {
  return (
    <Button sx={{ width: "100%" }} variant="contained" onClick={onClick}>
      {children}
      <SearchIcon />
    </Button>
  );
}
