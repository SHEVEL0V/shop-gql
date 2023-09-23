/** @format */

import React, { useState } from "react";

import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Text from "./text";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};

export default function According({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const rotate = isOpen ? "rotate-180" : "";

  const bg = isOpen ? "bg-red-50" : "";

  return (
    <div>
      <div
        className={`flex p-3 transition-colors duration-500 shadow 
         ${bg} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text>{title}</Text>
        <div className={`ml-auto transition-transform duration-500 ${rotate}`}>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <Collapse in={isOpen} timeout={500}>
        {children}
      </Collapse>
    </div>
  );
}
