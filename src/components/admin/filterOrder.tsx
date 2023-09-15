/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@/UI/autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import useSearchParams from "@/hooks/useSearchParams";
import BtbClean from "@/UI/btn/btnClean";

export default function FilterOrder() {
  const [date, setDate] = useState<any>({});
  const [status, setStatus] = useState<string>("");
  const { setParams } = useSearchParams();

  const dataParams = () =>
    date.$y ? { date: [date.$y, date.$M + 1, date.$D] } : { date: [] };

  const handleFilter = () => setParams({ status, ...dataParams() });

  return (
    <div className="p-2 flex flex-col border shadow  ">
      <div className="flex mt-8 mb-4">
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
        sx={{ marginTop: "15px", height: "50px" }}
        variant="contained"
        onClick={handleFilter}
      >
        search
      </Button>
    </div>
  );
}
