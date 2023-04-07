/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormMain from "../../components/admin/formMain";
import FormAddOpt from "../../components/admin/formAddOpt";
import UploadImg from "../../components/admin/uploadImg";
import Btn from "../../UI/btn";
import Autocomplete from "../../UI/autocomplete";
import picture from "../../assets/img.png";
import Text from "../../UI/text";
import { toast } from "react-toastify";
import { filterRes } from "../../helpers/filterRes";
import { useMutation, useQuery } from "@apollo/client";
import { schemasGql } from "../../gql";

import s from "./style.module.css";

export default function UpdateProducts({ page }) {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState({});
  const [img, setImg] = useState(picture);
  const { id } = useParams();
  const desc = useSelector((store) => store.options.desc);

  const boolean = page === "Update";

  useQuery(schemasGql.GET_PRODUCTS_BY_ID, {
    variables: { id },
    skip: !boolean,
    onCompleted: ({ getProductById }) => {
      setForm(filterRes(getProductById));
      setImg(getProductById.img);
    },
  });

  const [addProduct, { loading: loadADD }] = useMutation(
    schemasGql.ADD_PRODUCT,
    {
      refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
    }
  );

  const [updateProduct, { loading: loadUpdate }] = useMutation(
    schemasGql.UPDATE_PRODUCT
  );

  const loading = loadADD || loadUpdate;

  const handleAddProducts = async () => {
    addProduct({
      variables: { add: { ...form, file } },
    })
      .then(() => {
        setForm({});
        setImg(picture);
        toast.success("Product added successfully");
      })
      .catch(() => toast.error("Product added error"));
  };

  const handleUpdateProduct = async () =>
    updateProduct({
      variables: { update: { id, name: form.name, img, file } },
    })
      .then(() => toast.success("Product updated successfully"))
      .catch(() => toast.error("Product updated error"));

  const handlerFetch = () =>
    boolean ? handleUpdateProduct() : handleAddProducts();

  const handleSetForm = (value) => setForm((state) => ({ ...state, ...value }));

  return (
    <div className={s.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <UploadImg setFile={setFile} urlImg={img} setUrlImg={setImg} />
        <div style={{ width: "100%" }}>
          <Autocomplete
            options={desc?.types}
            name="type"
            onChange={(_, v) => handleSetForm({ type: v })}
            value={form?.type || ""}
          />
          <Autocomplete
            options={desc?.brands}
            name="brand"
            onChange={(_, v) => handleSetForm({ brand: v })}
            value={form?.brand || ""}
          />
          <FormMain
            data={form}
            form={["name", "price", "desc"]}
            setForm={setForm}
          />
        </div>
      </div>
      <FormAddOpt form={form} setForm={setForm} params={desc?.params} />
      <div className={s.buttonContainer}>
        <div style={{ width: "200px" }}>
          <Text>{page} product card</Text>
        </div>
        <Btn loading={loading} onClick={handlerFetch} disabled={false}>
          {page}
        </Btn>
      </div>
    </div>
  );
}
