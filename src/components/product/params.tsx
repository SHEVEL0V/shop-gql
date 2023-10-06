/** @format */

import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

type Props = {
    params:{name:string, value:string}[]}

export default function Params({ params }:Props) {
  return (
    <div className="h-36 mb-10   bg-slate-100 border-2 rounded border-slate-300 ">
      <div className="flex items-center h-10 bg-slate-300">
        <SettingsIcon sx={{ marginInline: "10px" }} />
        Options:
      </div>
      {params?.map((e, i) => (
        <div key={i} className=" odd:bg-slate-300 text-gray-700">
          <div className="flex h-8 items-center px-2 ">
            <div className=""> {e.name}</div>
            <div className="ml-auto">{e.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
