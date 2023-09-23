/** @format */

import React from "react";
import Modal from "@mui/material/Modal";

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
      <div className="max-w-[600px] max-h-[70vh] p-5 mx-auto flex flex-col rounded bg-slate-200 dark:bg-slate-500 ">
        {children}
      </div>
    </Modal>
  );
}
