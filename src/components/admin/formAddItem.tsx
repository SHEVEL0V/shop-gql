/** @format */

import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import FormField from "./formField";
import FormAddOpt from "./formAddOpt";
import UploadImg from "./uploadImg";
import Autocomplete from "@/UI/autocomplete";
import picture from "@/assets/img.png";
import Text from "@/UI/text";
import Container from "../container/containerAdmin";
import { LoadingButton } from "@mui/lab";

import type { Product } from "@/types";

type Props = {
  loading: boolean;
  mutation: (value: Product, files: any) => Promise<void>;
};

const defaultForm = {
  price: 0,
  type: "",
  brand: "",
  images: [""],
  name: "",
  desc: "",
  rating: 0,
  params: [],
};

export default function FormAddItem({ loading = false, mutation }: Props) {
  const [files, setFiles] = useState(false);
  const [form, setForm] = useState<Product>(defaultForm);

  const [images, setImages] = useState([picture]);

  const desc = useAppSelector((store) => store.options.desc);

  const handlerFetch = async () => {
    await mutation(form, files).then(() => {
      setForm(defaultForm), setImages([picture]);
    });
  };

  const handleSetForm = (value: {}) =>
    setForm((state: any) => ({ ...state, ...value }));

  const disabled =
    form.name !== "" &&
    form.brand !== "" &&
    form.type !== "" &&
    form.price !== 0;

  return (
    <Container>
      <UploadImg setFiles={setFiles} images={images} setImages={setImages} />
      <div className="w-full ">
        <Autocomplete
          options={desc?.types}
          name="type"
          onChange={(value) => handleSetForm({ type: value })}
          value={form.type}
        />
        <Autocomplete
          options={desc?.brands}
          name="brand"
          onChange={(value) => handleSetForm({ brand: value })}
          value={form.brand}
        />
        <FormField
          data={form}
          form={["name", "price", "desc"]}
          setForm={setForm}
        />
        <FormAddOpt params={desc?.params} setForm={setForm} form={form} />
        <div className="flex items-center p-4  border border-gray-400 rounded ">
          <Text>Add product card</Text>
          <LoadingButton
            loading={loading}
            onClick={handlerFetch}
            disabled={!disabled}
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "auto" }}
          >
            Add
          </LoadingButton>
        </div>
      </div>
      <div className="w-full col-span-2 h-36 border rounded border-gray-400"></div>
    </Container>
  );
}
