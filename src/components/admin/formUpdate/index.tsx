/** @format */

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import FormField from "../formField";
import FormAddOpt from "../formAddOpt";
import UploadImg from "../uploadImg";
import Autocomplete from "@/UI/autocomplete";
import picture from "@/assets/img.png";
import Text from "@/UI/text";

import s from "./style.module.css";
import type { Product } from "@/types";
import { LoadingButton } from "@mui/lab";

type Props = {
  data?: any;
  title?: string;
  mutation: (value: Product, file: any) => Promise<void>;
};

export default function ProductsUpdateForm({
  data,
  title = "",
  mutation,
}: Props) {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState(data || {});
  const [img, setImg] = useState(data?.img || picture);
  const [loading, setLoading] = useState(false);

  const desc = useAppSelector((store) => store.options.desc);

  const handlerFetch = async () => {
    setLoading(true);
    await mutation(form, file);
    setLoading(false);
    setForm({});
  };

  const handleSetForm = (value: {}) =>
    setForm((state: any) => ({ ...state, ...value }));

  const disabled = () => {
    const arr = Object.values(form);
    return arr.length >= 4 && !arr.includes("") && !arr.includes(0);
  };

  return (
    <div className={s.container}>
      <div className={s.form}>
        <UploadImg setFile={setFile} urlImg={img} setUrlImg={setImg} />
        <div className="w-full">
          <Autocomplete
            options={desc?.types}
            name="type"
            onChange={(value) => handleSetForm({ type: value })}
            value={form?.type || ""}
          />
          <Autocomplete
            options={desc?.brands}
            name="brand"
            onChange={(value) => handleSetForm({ brand: value })}
            value={form?.brand || ""}
          />
          <FormField
            data={form}
            form={["name", "price", "desc"]}
            setForm={setForm}
          />
        </div>
      </div>
      <FormAddOpt params={desc?.params} setForm={setForm} form={form} />
      <div className={s.buttonContainer}>
        <div>
          <Text>{title} product card</Text>
        </div>
        <LoadingButton
          loading={loading}
          onClick={handlerFetch}
          disabled={!disabled()}
          variant="contained"
          color="secondary"
          sx={{ width: "300px", marginLeft: "auto" }}
        >
          {title}
        </LoadingButton>
      </div>
    </div>
  );
}
