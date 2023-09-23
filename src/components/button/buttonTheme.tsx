/** @format */

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setButtonTheme } from "@/redux/button/slice";

import Fab from "@mui/material/Fab";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ButtonTheme() {
  const theme = useAppSelector((state) => state.button.theme);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <Fab
      sx={{ backgroundColor: theme ? "grey" : "while" }}
      color={theme ? "inherit" : "default"}
      size="small"
      onClick={() => {
        dispatcher(setButtonTheme());
      }}
    >
      {theme ? <DarkModeIcon /> : <LightModeIcon />}
    </Fab>
  );
}
