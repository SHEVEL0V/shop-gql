/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormMain from "../../components/admin/formMain";
import UploadImg from "../../components/admin/uploadImg";

import { schemasGql } from "../../gql";
import { useMutation, useQuery } from "@apollo/client";

import { TextField } from "@mui/material";
import Btn from "../../UI/btn";
import picture from "../../assets/img.png";
import { ToastContainer, toast } from "react-toastify";
import Text from "../../UI/text";
import "react-toastify/dist/ReactToastify.css";
import s from "./style.module.css";
import { filterRes } from "../../helpers/filterRes";

export default function UpdateUser() {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState({});
  const [urlImg, setUrlImg] = useState(picture);
  // const dispatch = useDispatch();

  const FORM = ["name", "telephone", "delivery"];

  // const emptyFields = Object.keys(form).some(
  //   (key) => FORM.includes(key) && form[key] === ""
  // );
  const errorPassword = form?.password === form?.password2;
  const disabled = !errorPassword;

  useQuery(schemasGql.GET_USER, {
    onCompleted: ({ getUser }) => {
      setForm(filterRes(getUser));
      setUrlImg(getUser.avatarURL);
    },
  });

  const [updateUser] = useMutation(schemasGql.UPDATE_USER);

  const handleUpdateUser = () =>
    updateUser({ variables: { user: { file, ...form } } })
      .then(() => {
        toast.success("Success update");
      })
      .catch(() => toast.error("Error update user"));

  const handleInput = (e) =>
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  return (
    <div className={s.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
        <div style={{ width: "100%" }}>
          <FormMain data={form} form={FORM} setForm={setForm} required={true} />
          <TextField
            sx={{ marginBottom: "10px", width: "100%" }}
            label="new password"
            name="password"
            value={form?.password || ""}
            onChange={handleInput}
            error={!errorPassword}
          />
          <TextField
            sx={{ marginBottom: "10px", width: "100%" }}
            label="again password"
            name="password2"
            value={form?.password2 || ""}
            onChange={handleInput}
            error={!errorPassword}
          />
        </div>
      </div>
      <div className={s.buttonContainer}>
        <Text>Update user profile</Text>

        <Btn
          style={{ width: "200px", marginLeft: "auto" }}
          disabled={disabled}
          loading={false}
          onClick={handleUpdateUser}
        >
          UPDATE
        </Btn>
      </div>

      <ToastContainer />
    </div>
  );
}
