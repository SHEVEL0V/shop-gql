/** @format */

import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1280px] p-5  flex flex-col sm:grid grid-cols-2 gap-4 ">
      {children}
    </div>
  );
}
