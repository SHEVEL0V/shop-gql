/** @format */

import IconButton from "@mui/material/IconButton";
import Image from "next/image";

type Props = {
  onClick?: () => void;
};
export default function Logo({ onClick }: Props) {
  return (
    <IconButton sx={{ display: "flex" }} onClick={onClick}>
      <Image src="/logo.svg" alt="logo" height={"25"} width={"25"} />
      <div className=" ml-2 text-xl  dark:text-slate-50 ">A-Store</div>
    </IconButton>
  );
}
