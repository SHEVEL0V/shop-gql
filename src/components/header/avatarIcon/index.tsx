/** @format */

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import {
  Avatar,
  Typography,
  MenuItem,
  Menu,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/auth/slice";

export default function AvatarIcon() {
  const [anchorElUser, setAnchorElUser] = useState<any>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const url = useAppSelector((store) => store.auth.user.avatarURL);

  const avatar = url || "/static/images/avatar/2.jpg";

  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleLogout = () => {
    dispatch(setUser({ token: "", user: null }));
    router.push("/");
  };
  return (
    <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={(e) => setAnchorElUser(e.currentTarget)}
          sx={{ p: 0 }}
        >
          <Avatar alt="avatar" src={avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={() => router.push("user")}>
          <Typography textAlign="center">Setting</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
