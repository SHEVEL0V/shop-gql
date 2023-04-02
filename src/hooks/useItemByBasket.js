/** @format */
import { useSelector } from "react-redux";

export default function useItemByBasket(id) {
  const basket = useSelector(({ basket }) => basket.data);

  const isDisable = () => basket.map((el) => el._id).includes(id);

  return { isDisable };
}
