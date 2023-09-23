/** @format */

import React, { useState } from "react";
import BtbClean from "@/UI/btn/btnClean";
import useSearchParamsCustom from "@/hooks/useSearchParams";
import OptionsCard from "./accordingList";
import According from "@/UI/according";

type Props = {
  options: { name: string; value: string[] }[];
};

export default function Options({ options = [] }: Props) {
  const { cleanParams } = useSearchParamsCustom();

  return (
    <According title="options:">
      {options?.map(({ name, value }, ind) => (
        <OptionsCard key={ind} title={name} value={value} />
      ))}
      <div className="p-2">
        <BtbClean onClick={() => cleanParams()}>Clean</BtbClean>
      </div>
    </According>
  );
}
