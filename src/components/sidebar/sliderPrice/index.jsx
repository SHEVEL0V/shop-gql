/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonSearch from "../../../UI/btnSearch";
import useSearchParamsCustom from "../../../hooks/useSearchParams";
import s from "./style.module.css";

export default function PriceSlider({ price = [0, 0] }) {
  const title = "price";
  const [value, setValue] = useState(price);
  const { setParams } = useSearchParamsCustom();
  const handleChange = (event, newValue) => setValue(newValue);

  const handleInputMin = (event) => {
    const value = Number(event.target.value);
    setValue((preValue) => [value, preValue[1]]);
  };

  const handleInputMax = (event) => {
    const value = Number(event.target.value);
    setValue((preValue) => [preValue[0], value]);
  };

  const handleSearch = () => setParams({ [title]: value });

  return (
    <Box>
      <div className={s.container}>
        <input
          className={s.input}
          type="text"
          value={value[0]}
          onChange={handleInputMin}
        />
        <input
          className={s.input}
          type="text"
          value={value[1]}
          onChange={handleInputMax}
        />
        <ButtonSearch onClick={handleSearch}>Ok</ButtonSearch>
      </div>

      <Slider
        sx={{ marginTop: 1 }}
        color="secondary"
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={0}
        max={price[1]}
        step={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}
