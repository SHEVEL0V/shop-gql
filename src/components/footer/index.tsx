/** @format */

import React from "react";
import IconButton from "@mui/material/IconButton";
//-icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <footer
      className={
        "flex shadow p-4 text-base text-gray-600 bg-slate-200 dark:bg-slate-600 dark:text-slate-50"
      }
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
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TelegramIcon />
        </IconButton>
      </div>
    </footer>
  );
}
