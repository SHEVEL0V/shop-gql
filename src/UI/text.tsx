/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Text({ children }: Props) {
  return (
    <div className="text-base text-slate-800 dark:text-slate-100 ">
      {children}
    </div>
  );
}
