/** @format */

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
  border?: boolean;
  title: string;
};

export default function According({ title, children }: Props) {
  return (
    <Accordion
      sx={{
        minHeight: "55px",
        borderRadius: 0,
        border: "none",
        "&:hover": {
          backgroundColor: "#f1f5f9",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={500} color="text.secondary">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0, backgroundColor: "white" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
