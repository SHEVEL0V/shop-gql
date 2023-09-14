/** @format */
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeBasket } from "@/redux/basket/slice";
import { setButtonBasket } from "@/redux/button/slice";
import ModalCustom from "@/components/modal";
import CardBasket from "@/components/card/cardBasket";
import BasketIkon from "@/components/button/buttonBasket";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { schemasGql } from "../gql";
import Text from "@/UI/text";

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
  const handleOrder = async () => {
    await addOrders({ variables: { add: basket } })
      .then(() => {
        dispatch(removeBasket());
        toast.success("Order accepted");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div>
      <BasketIkon qty={qty} onClick={handleClick} disabled={isClose} />
      <ModalCustom open={isOpen} onClick={handleClick}>
        <div className="overflow-auto  pb-2 rounded mb-2 flex flex-col gap-y-2">
          {isClose ? (
            <Text>No products found.</Text>
          ) : (
            basket.map((list) => <CardBasket key={list._id} data={list} />)
          )}
        </div>

        <Button
          disabled={qty === 0}
          sx={{ width: "100%", height: "60px", borderRadius: "50px" }}
          color="success"
          variant="contained"
          onClick={handleOrder}
        >
          Checkout
          <div className=" p-2 bg-slate-50 ml-auto rounded-3xl">
            <Text> &#8372; {sumPrice}</Text>
          </div>
        </Button>
      </ModalCustom>
    </div>
  );
}
