/** @format */

import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1280px] grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
      {children}
    </div>
  );
}
