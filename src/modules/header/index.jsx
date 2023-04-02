/** @format */

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { setButtonLogin } from "../../redux/button/slice";
import SearchInput from "../../components/header/search";
import MenuButton from "../../components/header/menuButton";
import AvatarIcon from "../../components/header/avatarIcon";
import Title from "../../UI/title";
import Btn from "../../UI/btn";
import BtnBack from "../../UI/btnBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import s from "./style.module.css";

export default function Header() {
  const isAuth = useSelector((s) => s.auth.token);
  const isAuthAdmin = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const matches = useMediaQuery("(min-width:768px)");

  const path = pathname.split("/");

  const visibilityAdmin = path[1] === "admin";
  const visibilityMenu = path[2] === "remove" || path[1] === "";
  const visibilityBtnBack = path[1] !== "";

  const handleColorButton = (value) =>
    pathname === value ? "warning" : "info";

  return (
    <AppBar position="sticky">
      <Toolbar>
        {visibilityMenu && !matches && <MenuButton />}
        {visibilityBtnBack && (
          <BtnBack onClick={() => navigate("/")}>home</BtnBack>
        )}

        <Title>SHOP</Title>
        {!visibilityAdmin && <SearchInput />}
        {visibilityAdmin && (
          <div className={s.navContainer}>
            <Button
              className={s.btn}
              variant="contained"
              color={handleColorButton("/admin/add")}
              onClick={() => navigate("/admin/add")}
            >
              add
            </Button>
            <Button
              className={s.btn}
              sx={{ marginInline: "5px" }}
              variant="contained"
              color={handleColorButton("/admin/remove")}
              onClick={() => navigate("/admin/remove")}
            >
              list
            </Button>
            <Button
              className={s.btn}
              sx={{ marginRight: "5px" }}
              variant="contained"
              color={handleColorButton("/admin/orders")}
              onClick={() => navigate("/admin/orders")}
            >
              orders
            </Button>
          </div>
        )}
        {isAuthAdmin && !visibilityAdmin && (
          <Btn onClick={() => navigate("/admin/add")} style={{ width: "none" }}>
            Admin panel
          </Btn>
        )}
        {isAuth ? (
          <AvatarIcon />
        ) : (
          <Btn
            style={{ width: "none" }}
            onClick={() => dispatch(setButtonLogin())}
          >
            Login
          </Btn>
        )}
      </Toolbar>
    </AppBar>
  );
}
