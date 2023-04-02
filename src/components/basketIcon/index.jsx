/** @format */

import React from "react";
import Fab from "@mui/material/Fab";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function BasketIkon({ qty = 0, onClick, disabled = false }) {
  return (
    <Fab
      color="secondary"
      size="big"
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
