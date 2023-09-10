/** @format */
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setBasket } from "@/redux/basket/slice";
import useItemByBasket from "@/hooks/useItemByBasket";
import Button from "@mui/material/Button";
import ButtonCount from "@/components/buttonCount";
import Text from "@/UI/text";
import RatingItem from "@/components/rating";

import Slider from "@/components/slider";

import type { Product } from "@/types";
import s from "./style.module.css";

type Props = { data: Product; id: string };

export default function Product({ data, id }: Props) {
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc, params, rating } = data;

  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <div className="flex-row border w-[1200px] mx-auto p-4 bg-slate-100">
      <div className=" mb-8 md:flex">
        <Slider>
          <Image width={500} height={400} src={img} alt="product image" />
          <Image width={500} height={400} src={img} alt="product image" />
          <Image width={500} height={400} src={img} alt="product image" />
          <Image width={500} height={400} src={img} alt="product image" />
        </Slider>

        <div>
          <Text size={26} color="black">
            {name}
          </Text>

          <div className={s.prise}>&#8372;{price}</div>
          <RatingItem id={id} rating={rating} />
          <h5>Descriptions:</h5>
          <Text>{desc}</Text>

          <div className="mt-10 mb-6 w-40">
            {isDisable() ? (
              <ButtonCount id={id} />
            ) : (
              <Button
                onClick={handleAddProducts}
                color="secondary"
                disabled={isDisable()}
                variant="contained"
              >
                <span> Add to basket </span>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="h-36 w-full p-2 bg-slate-100 border-t-2 border-gray-600">
        <b>Details:</b>
        {params?.map((e, i) => (
          <div key={i}>
            <div className="flex">
              <div className="w-16"> {e.name}</div>
              <div className={s.paramContainer}>{e.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
