/** @format */

import React from "react";
import Fab from "@mui/material/Fab";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

type Props = {
  qty: number;
  onClick: () => void;
  disabled: boolean;
};
export default function ButtonBasket({
  qty = 0,
  onClick,
  disabled = false,
}: Props) {
  return (
    <Fab
      color="secondary"
      size="large"
      disabled={disabled}
      style={{
        position: "fixed",
        right: 40,
        bottom: 50,
        marginLeft: 10,
      }}
      onClick={onClick}
    >
      <Badge color="success" badgeContent={qty}>
        <ShoppingBasketIcon />
      </Badge>
    </Fab>
  );
}
