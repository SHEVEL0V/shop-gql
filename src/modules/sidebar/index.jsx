/** @format */
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import SliderPrice from "../../components/sidebar/sliderPrice";
import AccordingList from "../../components/sidebar/accordingList";
import useSearchParamsCustom from "../../hooks/useSearchParams";
import s from "./style.module.css";
import Sort from "../../components/sidebar/sort";
import Options from "../../components/sidebar/options";

import { useQuery } from "@apollo/client";
import { GET_DESCRIPTORS } from "../../gql/schemas/products";

export default function Sidebar({ children, isLoading }) {
  const store = useSelector((store) => store);
  const isOpen = store.button.menu;

  const { setParams } = useSearchParamsCustom();

  const { loading, error, data } = useQuery(GET_DESCRIPTORS);

  const options = data?.getProductsDesc;

  return (
    <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
      {
        <Paper
          className={s.container}
          sx={{
            boxShadow: "inset -3px -3px 29px -15px rgba(67, 67, 71, 1)",
          }}
        >
          <div>
            <AccordingList
              title="type"
              data={options?.types}
              isLoading={isLoading}
            />
            <Sort onSort={setParams} />
            <SliderPrice price={options?.price} />
            <AccordingList title="brand" data={options?.brands} />
            <Options options={options?.params} />
            <div className={s.children}>{children}</div>
          </div>
        </Paper>
      }
    </Slide>
  );
}
