/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_ID } from "../../gql/schemas/products";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";
import Loader from "../../components/loader";
import LoadingButton from "@mui/lab/LoadingButton";

import s from "./style.module.css";

export default function Product() {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { id },
  });
  const product = data?.getProductById || {};
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc, options } = product;

  const handleAddProducts = () => dispatch(setBasket(product));

  return loading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <img src={img} alt="logo" className={s.img} />

      <h2>{name}</h2>
      <p>{desc}</p>
      <div className={s.flex}>
        <div className={s.prise}>
          price: <span>{price}</span> UAH
        </div>

        <LoadingButton
          onClick={handleAddProducts}
          variant="contained"
          disabled={isDisable()}
          sx={{ marginLeft: "auto" }}
        >
          <span>Add to basket</span>
        </LoadingButton>
      </div>
      <div>
        {options?.map((e, i) => (
          <div key={i}>
            <p>
              {e.name}
              <b>{e.value}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
