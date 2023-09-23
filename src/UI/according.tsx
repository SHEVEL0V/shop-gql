/** @format */

import React, { useState } from "react";

import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};

export default function According({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const rotate = isOpen ? "rotate-180" : "";

  const bg = isOpen ? "bg-slate-300" : "";

  return (
    <div className="border-t">
      <div
        className={`flex p-3 mb-1 transition-colors duration-500 ${bg}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <div className={` ml-auto transition-transform ${rotate} `}>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div>
        <Collapse in={isOpen} timeout={500}>
          {children}
        </Collapse>
      </div>
    </div>
  );
}
