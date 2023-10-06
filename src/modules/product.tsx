/** @format */
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setBasket } from "@/redux/basket/slice";
import useItemByBasket from "@/hooks/useItemByBasket";
import Button from "@mui/material/Button";
import ButtonCount from "@/components/button/buttonsCountItem";
import Text from "@/UI/text";
import RatingItem from "@/components/rating";

import Slider from "@/components/slider";

import type { Product } from "@/types";
import SimilarProduct from "@/components/product/similarProduct";
import Params from "@/components/product/params";

type Props = { data: Product; id: string };

export default function Product({ data, id }: Props) {
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { images, price, name, desc, params, rating, type } = data;

  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <div className="flex-row  max-w-[1200px] mx-auto p-4 ">
      <div className=" mb-8 md:flex">
        <Slider>
          {images.map((img, i) => (
            <Image key={i} width={500} height={400} src={img} alt={name} />
          ))}
        </Slider>

        <div>
          <div className="mb-6">
            <Text size="xl">{name}</Text>
          </div>
          <RatingItem id={id} rating={rating} />
          <div className=" text-green-600 text-3xl font-bold">
            &#8372;{price}
          </div>

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
      <Params params={params} />
      <SimilarProduct type={type} />
    </div>
  );
}
