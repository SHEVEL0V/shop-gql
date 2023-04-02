/** @format */
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { setButtonMenu } from "../../../redux/button/slice";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MenuButton() {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:480px)");

  useEffect(() => {
    dispatch(setButtonMenu());
  }, [dispatch, matches]);

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={() => dispatch(setButtonMenu())}
    >
      <MenuIcon />
    </IconButton>
  );
}
