/** @format */

import React from "react";
import Modal from "@mui/material/Modal";
import s from "./style.module.css";

type Props = { children: React.ReactNode; open: boolean; onClick: () => void };

export default function ModalCustom({
  children,
  open = false,
  onClick,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClick}
      sx={{
        paddingTop: 10,
        paddingInline: 2,
      }}
      closeAfterTransition={true}
    >
      <div className={s.container}>{children}</div>
    </Modal>
  );
}
