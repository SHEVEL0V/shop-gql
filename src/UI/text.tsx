/** @format */

import React from "react";

type Props = {
  children: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
};

export default function Text({ children, size = "base" }: Props) {
  return (
    <div className={`text-${size}  text-slate-800 dark:text-slate-100 `}>
      {children}
    </div>
  );
}
