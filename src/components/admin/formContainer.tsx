/** @format */

import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1280px] flex flex-col gap-4 p-5 sm:flex-row">
      {children}
    </div>
  );
}
