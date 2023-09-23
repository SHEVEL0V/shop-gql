/** @format */
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/router";
import { setBasket } from "@/redux/basket/slice";
import useItemByBasket from "@/hooks/useItemByBasket";
import RatingItem from "@/components/rating";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ButtonCount from "@/components/button/buttonsCountItem";
import Image from "next/image";
import Text from "@/UI/text";

import placeholder from "@/assets/img.png";

import type { Product } from "@/types";

type Props = {
  data: Product;
};

export default function CardProduct({ data }: Props) {
  const { _id, name, price, rating, images, brand } = data;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isDisable } = useItemByBasket(_id);

  const handleClickCard = () => router.push({ pathname: `/${brand}-${_id}` });
  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <Card
      className="p-2  hover:scale-105 border  hover:border-amber-500
       dark:bg-slate-600 dark:border-gray-700 dark:hover:border-amber-500"
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
        src={images[0]}
        alt={name}
        className="my-auto "
        blurDataURL={placeholder.src}
        placeholder="blur"
      />
      <div className="h-10 mb-2">
        <Text>{name}</Text>
      </div>
      <RatingItem id={_id} rating={rating} />
      <div className="flex items-center">
        <h3 className="font-bold text-green-600 text-lg">
          &#8372; <span>{price}</span>
        </h3>
        {!isDisable() ? (
          <Button
            sx={{
              marginLeft: "auto",
              borderRadius: "32px",
            }}
            onClick={handleAddProducts}
            color="secondary"
            variant="contained"
          >
            <ShoppingBasketIcon sx={{ height: "20px", marginRight: "3px" }} />
            Cart
          </Button>
        ) : (
          <div className="w-24 ml-auto">
            <ButtonCount id={_id} />
          </div>
        )}
      </div>
    </Card>
  );
}
