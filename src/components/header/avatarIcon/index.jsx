/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { setUser } from "../../../redux/auth/slice";

export default function AvatarIcon() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = useSelector((store) => store.auth.user.picture);

  const avatar = url || "/static/images/avatar/2.jpg";

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(setUser({}));
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
        <MenuItem onClick={() => navigate("user")}>
          <Typography textAlign="center">Setting</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
