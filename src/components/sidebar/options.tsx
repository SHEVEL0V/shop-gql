/** @format */

import React from "react";
import BtbClean from "@/UI/btn/btnClean";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import OptionsCard from "./optionsCard";
import According from "@/UI/according";

type Props = {
  options: { name: string; value: string[] }[];
};

export default function Options({ options = [] }: Props) {
  const { cleanParams } = useSearchParamsCustom();
  return (
    <According title="options:">
      {options?.map(({ name, value }, ind) => (
        <OptionsCard key={ind} title={name} value={value} />
      ))}
      <div className="p-2">
        <BtbClean onClick={() => cleanParams()}>Clean</BtbClean>
      </div>
    </According>
  );
}
