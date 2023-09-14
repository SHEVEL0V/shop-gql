/** @format */

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

export default function Logo() {
  return (
    <IconButton>
      <Image src="/logo.svg" alt="logo" height={"40"} width={"40"} />
      <div className=" text-slate-50"> A-Store</div>
    </IconButton>
  );
}
