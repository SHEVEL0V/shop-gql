/** @format */
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setBasket } from "@/redux/basket/slice";
import useItemByBasket from "@/hooks/useItemByBasket";
import Button from "@mui/material/Button";
import ButtonCount from "@/components/buttonCount";
import Text from "@/UI/text";
import RatingItem from "@/components/rating";
import SettingsIcon from "@mui/icons-material/Settings";
import Slider from "@/components/slider";

import type { Product } from "@/types";

type Props = { data: Product; id: string };

export default function Product({ data, id }: Props) {
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc, params, rating } = data;

  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <div className="flex-row  w-[1200px] mx-auto p-4 ">
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

          <div className="mt-10 text-green-600 text-3xl font-bold">
            &#8372;{price}
          </div>
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
      <div className="h-36 max-w-[700px]  bg-slate-100 border-2 rounded border-slate-300 ">
        <div className="flex items-center h-10 bg-slate-300">
          <SettingsIcon sx={{ marginInline: "10px" }} />
          Options:
        </div>
        {params?.map((e, i) => (
          <div key={i} className=" odd:bg-slate-300 text-gray-700">
            <div className="flex h-8 items-center px-2 ">
              <div className=""> {e.name}</div>
              <div className="ml-auto">{e.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
