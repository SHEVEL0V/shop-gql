/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "../../../UI/autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";

import s from "./style.module.css";
import BtbClean from "../../../UI/btnClean";
import Btn from "../../../UI/btn";

export default function FilterOrder({ setParams, updateOrder }) {
  const [date, setDate] = useState({});
  const [status, setStatus] = useState("");

  const dataParams = () =>
    date.$y ? { date: [date.$y, date.$M + 1, date.$D] } : { date: null };

  const handleFilter = () => setParams({ status, ...dataParams() });

  const handleClickButton = (value) =>
    value ? updateOrder(value) : updateOrder("");

  const handleChangeAutoCom = (status) => setStatus(status);

  return (
    <div className={s.container}>
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={date}
            onChange={(newValue) => setDate(newValue)}
            sx={{ marginRight: "10px" }}
          />
        </LocalizationProvider>
        <BtbClean onClick={() => setDate({})} />
      </div>

      <Autocomplete
        options={["IDLE", "PENDING", "RESOLVED", "REJECTED"]}
        name={"status"}
        onChange={handleChangeAutoCom}
      />
      <Button
        sx={{ marginTop: "15px", height: "60px" }}
        variant="contained"
        onClick={handleFilter}
      >
        search
      </Button>
      <Typography
        sx={{ fontSize: 20, marginTop: "15px", marginBottom: "10px" }}
        color="text.secondary"
      >
        Change status:
      </Typography>
      <div style={{ display: "flex" }}>
        <Btn color="primary" onClick={() => handleClickButton("PENDING")}>
          pen
        </Btn>
        <Btn onClick={() => handleClickButton("RESOLVED")}>res</Btn>
        <Btn color="error" onClick={() => handleClickButton("REJECTED")}>
          rej
        </Btn>
      </div>
    </div>
  );
}
