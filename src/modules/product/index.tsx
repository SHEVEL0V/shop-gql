/** @format */

import { useDispatch } from "react-redux";
import { setBasket } from "../../redux/basket/slice";
import useItemByBasket from "../../hooks/useItemByBasket";
import Button from "@mui/material/Button";
import type { Product } from "@/types";
import s from "./style.module.css";
import Image from "next/image";

type Props = { data: Product; id: string };

export default function Product({ data, id }: Props) {
  const dispatch = useDispatch();
  const { isDisable } = useItemByBasket(id);

  const { img, price, name, desc, params } = data;

  const handleAddProducts = () => dispatch(setBasket(data));

  return (
    <div className={s.container}>
      <div className={s.itemContainer}>
        <Image
          width={500}
          height={500}
          src={img}
          alt="product image"
          className={s.img}
        />
      </div>

      <div className={s.itemContainer}>
        <h2>{name}</h2>
        <div className={s.prise}>
          price: <span>{price}</span> UAH
        </div>
        <h5>Descriptions:</h5>
        <p>{desc}</p>
        <div>
          {params?.map((e, i) => (
            <div key={i}>
              <div style={{ display: "flex" }}>
                <div className={s.paramContainer}> {e.name}</div>
                <div className={s.paramContainer}>{e.value}</div>
              </div>
            </div>
          ))}
        </div>

        <Button
          sx={{ marginTop: "auto" }}
          onClick={handleAddProducts}
          color="secondary"
          disabled={isDisable()}
          variant="contained"
        >
          <span>{!isDisable() ? "Add to basket" : "item in the basket"}</span>
        </Button>
      </div>
    </div>
  );
}
