/** @format */

import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import FormMain from "@/components/admin/formField";
import UploadImg from "@/components/admin/uploadImg";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import picture from "@/assets/img.png";
import Text from "@/UI/text";
import s from "./style.module.css";

import type { User } from "@/types";

type Props = {
  data: any;
  updateUser: (form: User, file: any) => Promise<void>;
};

export default function UpdateUser({ data, updateUser }: Props) {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState(data || {});
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [urlImg, setUrlImg] = useState(data?.avatarURL || picture);
  const [loading, setLoading] = useState(false);
  // const dispatch = useAppDispatch();

  const FORM = ["name", "telephone", "delivery"];

  const errorPassword = password === passwordAgain;

  const handleUpdateUser = async () => {
    setLoading(true);
    await updateUser(form, file);
    setLoading(false);
  };

  return (
    <div className={s.container}>
      <div className="flex w-full">
        <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
        <div className="w-full">
          <FormMain data={form} form={FORM} setForm={setForm} required={true} />
          <TextField
            sx={{ marginBottom: "10px", width: "100%" }}
            label="new password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "10px", width: "100%" }}
            label="again password"
            name="passwordAgain"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            error={!errorPassword}
          />
        </div>
      </div>
      <div className={s.buttonContainer}>
        <Text>Update user profile</Text>

        <LoadingButton
          variant="contained"
          color="secondary"
          sx={{ width: "200px", marginLeft: "auto" }}
          loading={loading}
          onClick={handleUpdateUser}
        >
          UPDATE
        </LoadingButton>
      </div>
    </div>
  );
}
