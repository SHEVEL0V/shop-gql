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

type Props = {
  options: { name: string; value: string[] }[];
};

export default function Options({ options = [] }: Props) {
  const { cleanParams } = useSearchParamsCustom();
  return (
    <div className="my-2  border-2 rounded ">
      <div className="p-3  text-gray-500">options:</div>
      {options?.map(({ name, value }, ind) => (
        <OptionsCard key={ind} title={name} value={value} />
      ))}
      <div className="m-2">
        <BtbClean onClick={() => cleanParams()}>Clean</BtbClean>
      </div>
    </div>
  );
}
