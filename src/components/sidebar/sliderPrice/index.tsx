/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonSearch from "../../../UI/btnSearch";
import useSearchParamsCustom from "../../../hooks/useSearchParams";
import s from "./style.module.css";

type Event = React.ChangeEvent<HTMLInputElement>;
type Props = { price: number[] };

export default function PriceSlider({ price = [0, 0] }: Props) {
  const title: string = "price";
  const [value, setValue] = useState<number[]>(price);
  const { setParams } = useSearchParamsCustom();

  const handleInputMin = (e: Event) => {
    const value = Number(e.target.value);
    setValue((preValue) => [value, preValue[1]]);
  };

  const handleInputMax = (e: Event) => {
    const value = Number(e.target.value);
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
        onChange={(_, value) => typeof value === "object" && setValue(value)}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}
