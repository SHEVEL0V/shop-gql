/** @format */

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/auth/slice";
import { setButtonLogin } from "@/redux/button/slice";
import { schemasGql } from "@/gql";
import { useMutation } from "@apollo/client";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import ModalCustom from "@/components/modal";
import GoogleLogin from "./googleAuth";
import { Button, Typography } from "@mui/material";
import { toast } from "react-toastify";
import s from "./style.module.css";

import type { UserToken, ObjType } from "@/types";

export default function Auth() {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState<ObjType>({});

  const isOpen = useAppSelector((store) => store.button.login);

  const [registerUser] = useMutation(schemasGql.REGISTER);
  const [loginUser] = useMutation(schemasGql.LOGIN);
  const [authGoogle] = useMutation(schemasGql.AUTH);

  const formSingIn = ["email", "password"];
  const formSingUp = [
    "name",
    "email",
    "telephone",
    "password",
    "password_again",
  ];

  const mainForm = checked ? formSingIn : formSingUp;

  const renderError = ({ message }: { message: string }) =>
    toast.error(message);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleAuthSuccess = (payload: UserToken) => {
    dispatch(setButtonLogin());
    dispatch(setUser(payload));
    setForm({});
  };

  const handleAuthGoogle = (token: string | undefined) =>
    authGoogle({ variables: { token } })
      .then(({ data }) => handleAuthSuccess(data.authUser))
      .catch(renderError);

  const handleClickButtonAuth = () =>
    checked
      ? loginUser({ variables: { user: form } })
          .then(({ data }) => handleAuthSuccess(data.loginUser))
          .catch(renderError)
      : registerUser({ variables: { user: form } })
          .then(({ data }) => handleAuthSuccess(data.registerUser))
          .catch(renderError);

  const handleCloseModal = () => dispatch(setButtonLogin());

  return (
    <div>
      <ModalCustom open={isOpen} onClick={handleCloseModal}>
        {mainForm.map((item, index) => (
          <TextField
            key={index}
            margin="normal"
            required
            fullWidth
            error={item === "password_again" && form[item] !== form.password}
            label={item}
            name={item}
            type={item}
            value={form[item] || ""}
            onChange={handleInput}
          />
        ))}

        <Button
          disabled={false}
          variant="contained"
          sx={{ width: "200px", marginInline: "auto" }}
          onClick={handleClickButtonAuth}
        >
          {checked ? "sing in" : "sing up"}
        </Button>
        <div className={s.authContainer}>
          <div className={s.switch}>
            <Switch onChange={() => setChecked((s) => !s)} />
            <Typography component="h1" variant="body1" color="text.secondary">
              {checked
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign in"}
            </Typography>
          </div>
          <GoogleLogin auth={handleAuthGoogle} error={renderError} />
        </div>
      </ModalCustom>
    </div>
  );
}
