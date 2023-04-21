/** @format */
import { useAppSelector } from "@/redux/hooks";

export default function useItemByBasket(id: string) {
  const basket = useAppSelector(({ basket }) => basket.data);

  const isDisable = () => basket.map((el) => el._id).includes(id);

  return { isDisable };
}
