/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@/UI/autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import useSearchParams from "@/hooks/useSearchParams";
import BtbClean from "@/UI/btnClean";

import s from "./style.module.css";

type Props = {
  updateOrder: (value: string) => void;
  disabled: boolean;
};

export default function FilterOrder({ updateOrder, disabled = false }: Props) {
  const [date, setDate] = useState<any>({});
  const [status, setStatus] = useState<string>("");
  const { setParams } = useSearchParams();

  const dataParams = () =>
    date.$y ? { date: [date.$y, date.$M + 1, date.$D] } : { date: [] };

  const handleFilter = () => setParams({ status, ...dataParams() });

  const handleClickButton = (value: string) =>
    value ? updateOrder(value) : updateOrder("");

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
        <BtbClean onClick={() => setDate([])} />
      </div>

      <Autocomplete
        options={["IDLE", "PENDING", "RESOLVED", "REJECTED"]}
        name={"status"}
        onChange={(value) => setStatus(value)}
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
        <Button
          color="success"
          variant="contained"
          disabled={disabled}
          onClick={() => handleClickButton("PENDING")}
        >
          pen
        </Button>
        <Button
          sx={{ marginInline: "10px" }}
          variant="contained"
          disabled={disabled}
          color="primary"
          onClick={() => handleClickButton("RESOLVED")}
        >
          res
        </Button>
        <Button
          variant="contained"
          disabled={disabled}
          color="error"
          onClick={() => handleClickButton("REJECTED")}
        >
          rej
        </Button>
      </div>
    </div>
  );
}
