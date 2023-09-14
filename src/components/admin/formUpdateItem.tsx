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
  loading: boolean;
  mutation: (value: Product, files: any) => Promise<void>;
};

export default function FormUpdateItem({
  loading = false,
  data,

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
        <div className="flex p-4 items-center border border-gray-500 rounded">
          <div>
            <Text>Update product card</Text>
          </div>
          <LoadingButton
            loading={loading}
            onClick={handlerFetch}
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "auto" }}
          >
            Update
          </LoadingButton>
        </div>
      </div>
    </Container>
  );
}
