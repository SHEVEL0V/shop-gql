/** @format */
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/router";
import { setBasket } from "@/redux/basket/slice";
import useItemByBasket from "@/hooks/useItemByBasket";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";
import placeholder from "@/assets/img.png";
import { toast } from "react-toastify";

import s from "./style.module.css";

import type { Product } from "@/types";

type Props = {
  data: Product;
};

export default function CardProduct({ data }: Props) {
  const { _id, name, price, rating, img, brand } = data;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isDisable } = useItemByBasket(_id);

  const handleClickCard = () => router.push({ pathname: `/${brand}-${_id}` });
  const handleAddProducts = () => dispatch(setBasket(data));

  const [addRating] = useMutation(schemasGql.GET_RATE, {
    refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
  });

  const handleUpdateRating = (value: number | null) =>
    value &&
    addRating({ variables: { itemId: _id, rate: value } })
      .then(() => toast.success("Rating updated"))
      .catch(() => toast.error("Error updating rating , please authenticate"));

  return (
    <Card
      className={s.container}
      sx={{
        transition: "all 350ms ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image
        onClick={handleClickCard}
        width={500}
        height={500}
        src={img}
        alt={name}
        className={s.img}
        blurDataURL={placeholder.src}
        placeholder="blur"
      />
      <h2 className={s.title}>{name}</h2>
      <b className={s.flex}>
        Rating
        <Rating
          sx={{ marginBottom: 1, marginLeft: 1 }}
          value={rating}
          onChange={(_, v) => handleUpdateRating(v)}
        />
      </b>
      <h3 className={s.prise}>
        price: <span>{price}</span> UAH
      </h3>
      <Button
        onClick={handleAddProducts}
        color="secondary"
        disabled={isDisable()}
        variant="contained"
      >
        <span>{!isDisable() ? "Add to basket" : "item in the basket"}</span>
      </Button>
    </Card>
  );
}
