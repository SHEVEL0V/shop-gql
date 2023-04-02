/** @format */

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import s from "./style.module.css";

export default function According({ title, children, border }) {
  return (
    <Accordion
      className={s.container}
      sx={{
        minHeight: "55px",
        boxShadow: border ? "0px 0px 10px 3px rgba(66,165,245,1)" : "none",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="text.secondary">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
