/** @format */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { Card } from "@mui/material";
import { toast } from "react-toastify";

import { useMutation } from "@apollo/client";
import { schemasGql } from "../../gql";

import s from "./style.module.css";

export default function CardProduct({ data }) {
  const { _id, name, price, rating, img, brand } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDisable } = useItemByBasket(_id);

  const handleClickCard = () => navigate(`/${brand}/${_id}`);
  const handleAddProducts = () => dispatch(setBasket(data));

  const [addRating] = useMutation(schemasGql.GET_RATE, {
    refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
  });

  const handleUpdateRating = (e, value) =>
    addRating({ variables: { itemId: _id, rate: value } })
      .then(() => toast.success("Rating updated"))
      .catch((err) => toast.error("Error updating rating"));

  return (
    <Card
      className={s.container}
      sx={{
        transition: "all 350ms ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img onClick={handleClickCard} src={img} alt={name} className={s.img} />
      <h2 className={s.title}>{name}</h2>
      <b className={s.flex}>
        Rating
        <Rating
          sx={{ marginBottom: 1, marginLeft: 1 }}
          value={rating}
          onChange={handleUpdateRating}
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
