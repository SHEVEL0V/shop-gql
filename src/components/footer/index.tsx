/** @format */

import React from "react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
//-icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
//-styles
// import s from "./style.module.css";

export default function Footer() {
  return (
    <footer
      className={"flex p-4 text-base text-gray-500 bg-gray-600 text-slate-50"}
    >
      <div className="my-auto">
        <p>© 2023 A-Store Company. All rights reserved.</p>
      </div>
      <div className="ml-auto">
        <div className="flex-col p-1">
          <div className="ml-2">Follow Us On</div>
          <div className="h-0.5 bg-gray-400"></div>
        </div>
        <IconButton>
          <FacebookIcon sx={{ fill: "white" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ fill: "white" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ fill: "white" }} />
        </IconButton>
        <IconButton>
          <TelegramIcon sx={{ fill: "white" }} />
        </IconButton>
      </div>
    </footer>
  );
}
