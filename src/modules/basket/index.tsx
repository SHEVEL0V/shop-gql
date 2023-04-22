/** @format */
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeBasket } from "@/redux/basket/slice";
import { setButtonBasket } from "@/redux/button/slice";
import ModalCustom from "@/components/modal";
import CardBasket from "@/components/cardBasket";
import BasketIkon from "@/components/basketIcon";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

import { useMutation } from "@apollo/client";
import { schemasGql } from "../../gql";

import s from "./style.module.css";

export default function Basket() {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(({ basket }) => basket.data);
  const isOpen = useAppSelector(({ button }) => button.basket) || false;

  const qty = basket.length;
  const isClose = qty === 0;

  const [addOrders] = useMutation(schemasGql.ADD_ORDER);

  const sumPrice = basket
    .map(({ qty, price }) => qty * price)
    .reduce((acc, v) => acc + v, 0);

  const handleClick = () => dispatch(setButtonBasket());
  const handleOrder = () =>
    addOrders({ variables: { add: basket } })
      .then(() => {
        dispatch(removeBasket());
        toast.success("Order accepted");
      })
      .catch((err) => toast.error(err));

  return (
    <div>
      <BasketIkon qty={qty} onClick={handleClick} disabled={isClose} />
      <ModalCustom open={isOpen} onClick={handleClick}>
        <div className={s.container}>
          {isClose ? (
            <h3>Add product to cart</h3>
          ) : (
            basket.map((list) => <CardBasket key={list._id} data={list} />)
          )}
        </div>
        <div className={s.priceContainer}>
          <b className={s.prise}>{sumPrice}</b>
          <Button
            disabled={qty === 0}
            sx={{ width: 200 }}
            color="success"
            variant="contained"
            onClick={handleOrder}
          >
            To order
          </Button>
        </div>
      </ModalCustom>
    </div>
  );
}
