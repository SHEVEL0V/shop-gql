/** @format */

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import FormField from "./formField";
import FormAddOpt from "./formAddOpt";
import UploadImg from "./uploadImg";
import Autocomplete from "@/UI/autocomplete";
import picture from "@/assets/img.png";
import Text from "@/UI/text";
import Container from "./formContainer";

import type { Product } from "@/types";
import { LoadingButton } from "@mui/lab";

type Props = {
  data: Product;
  title?: string;
  loading: boolean;
  mutation: (value: Product, files: any) => Promise<void>;
};

export default function FormUpdateItem({
  loading = false,
  data,
  title = "",
  mutation,
}: Props) {
  const [files, setFiles] = useState(false);
  const [form, setForm] = useState(data || {});
  const [images, setImages] = useState(data?.images || [picture]);

  const { brand, type } = form || { brand: "", type: "" };

  const desc = useAppSelector((store) => store.options.desc);

  const handlerFetch = async () => {
    await mutation(form, files);
  };

  const handleSetForm = (value: {}) =>
    setForm((state: any) => ({ ...state, ...value }));

  const disabled = () => {
    const arr = Object.values(form);
    return arr.length >= 4 && !arr.includes("") && !arr.includes(0);
  };

  return (
    <Container>
      <UploadImg setFiles={setFiles} images={images} setImages={setImages} />
      <div className=" w-full">
        <Autocomplete
          options={desc?.types}
          name="type"
          onChange={(value) => handleSetForm({ type: value })}
          value={type}
        />
        <Autocomplete
          options={desc?.brands}
          name="brand"
          onChange={(value) => handleSetForm({ brand: value })}
          value={brand}
        />
        <FormField
          data={form}
          form={["name", "price", "desc"]}
          setForm={setForm}
        />

        <FormAddOpt params={desc?.params} setForm={setForm} form={form} />
        <div>
          <div>
            <Text>{title} product card</Text>
          </div>
          <LoadingButton
            loading={loading}
            onClick={handlerFetch}
            disabled={!disabled()}
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "auto" }}
          >
            {title}
          </LoadingButton>
        </div>
      </div>
    </Container>
  );
}
