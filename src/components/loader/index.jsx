/** @format */

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import s from "./style.module.css";

export default function Loader() {
  return (
    <div className={s.container}>
      <CircularProgress />
    </div>
  );
}
