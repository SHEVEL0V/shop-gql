/** @format */

import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setButtonLogin } from "@/redux/button/slice";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import SearchInput from "@/components/header/search";
import MenuButton from "@/components/header/menuButton";
import AvatarIcon from "@/components/header/avatarIcon";
import BtnBack from "@/UI/btn/btnBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "@/UI/logo";

export default function Header() {
  const isAuth = useAppSelector((s) => s.auth.token);
  const isAuthAdmin = useAppSelector((s) => s.auth.user?.role) === "admin";

  const dispatch = useAppDispatch();
  const screen768 = useMediaQuery("(min-width:768px)");
  const screen480 = useMediaQuery("(min-width:480px)");
  const router = useRouter();
  const path = router.pathname;

  const visibilityAdmin = path.includes("admin");
  const visibilityMenu = path.includes("remove") || path === "/";
  const visibilityStartPage = path === "/";

  const navigate = (value: string) => router.push(value);
  const handleColorButton = (value: string) =>
    path.includes(value) ? "warning" : "info";

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ padding: "5px", display: "flex" }}>
        {visibilityMenu && !screen768 && <MenuButton />}
        {!visibilityStartPage && <BtnBack onClick={() => navigate("/")} />}
        {screen480 && <Logo />}
        <div className="ml-auto"></div>
        {visibilityStartPage && <SearchInput />}
        {visibilityAdmin && (
          <div className="">
            <Button
              variant="contained"
              color={handleColorButton("add")}
              onClick={() => navigate("/admin/add")}
            >
              add
            </Button>
            <Button
              sx={{ marginInline: "5px" }}
              variant="contained"
              color={handleColorButton("list")}
              onClick={() => navigate("/admin/list")}
            >
              list
            </Button>
            <Button
              sx={{ marginRight: "5px" }}
              variant="contained"
              color={handleColorButton("orders")}
              onClick={() => navigate("/admin/orders")}
            >
              orders
            </Button>
          </div>
        )}
        {isAuthAdmin && !visibilityAdmin && (
          <Button
            onClick={() => navigate("/admin/add")}
            variant="contained"
            color="secondary"
          >
            Admin panel
          </Button>
        )}
        {isAuth ? (
          <AvatarIcon />
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(setButtonLogin())}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
