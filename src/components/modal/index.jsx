/** @format */

import React from "react";
import { Modal } from "@mui/material";
import s from "./style.module.css";

export default function ModalCustom({ children, open, onClick }) {
  return (
    <Modal
      open={open}
      onClose={onClick}
      sx={{
        paddingTop: 10,
        paddingInline: 2,
        visibility: open ? "visible" : "hidden",
      }}
      closeAfterTransition={true}
    >
      <div className={s.container}>{children}</div>
    </Modal>
  );
}
