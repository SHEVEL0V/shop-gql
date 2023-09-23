/** @format */

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

export default function Logo() {
  return (
    <IconButton sx={{ display: "flex" }}>
      <Image src="/logo.svg" alt="logo" height={"25"} width={"25"} />
      <div className=" ml-2 text-xl  dark:text-slate-50 ">A-Store</div>
    </IconButton>
  );
}
