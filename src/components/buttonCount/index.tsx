/** @format */

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Button from "@mui/material/Button";
import Text from "@/UI/text";
import {
  removeBasketEl,
  incrementsQty,
  decrementsQty,
} from "@/redux/basket/slice";

type Props = {
  id: string;
};

export default function ButtonCount({ id }: Props) {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(({ basket }) => basket.data);

  const qty = basket.find(({ _id }) => _id === id)?.qty;

  const handleCountIncrement = () => dispatch(incrementsQty({ id }));
  const handleCountDecrement = (value: true) =>
    value ? dispatch(decrementsQty({ id })) : dispatch(removeBasketEl({ id }));

  return (
    <div className="flex w-full mt-auto  p-1 rounded-3xl items-center bg-green-700 ">
      <Button
        sx={{
          marginRight: "auto",
          padding: "0",
          minWidth: "30px",
          minHeight: "30px",
          borderRadius: "100%",
        }}
        variant="contained"
        color="success"
        onClick={() => handleCountDecrement(true)}
      >
        -
      </Button>
      <Text color="white">{qty}</Text>
      <Button
        sx={{
          marginLeft: "auto",
          padding: "0",
          minWidth: "30px",
          minHeight: "30px",
          borderRadius: "100%",
        }}
        variant="contained"
        color="success"
        onClick={() => handleCountIncrement()}
      >
        +
      </Button>
    </div>
  );
}
