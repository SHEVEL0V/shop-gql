/** @format */
import { useQuery } from "@apollo/client";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDesc } from "@/redux/options/slice";
import SliderPrice from "@/components/sidebar/sliderPrice";
import AccordingList from "@/components/sidebar/accordingList";
import ButtonTheme from "@/components/button/buttonTheme";
import Sort from "@/components/sidebar/sort";
import Options from "@/components/sidebar/options";
import { GET_DESCRIPTORS } from "@/gql/schemas/products";

type Props = { children?: React.ReactNode };

export default function Sidebar({ children }: Props) {
  const isOpen = useAppSelector((store) => store.button.menu);
  const options = useAppSelector((store) => store.options.desc);

  const dispatch = useAppDispatch();

  useQuery(GET_DESCRIPTORS, {
    onCompleted: ({ getProductsDesc }) => dispatch(setDesc(getProductsDesc)),
  });

  return (
    <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
      {
        <div className="flex flex-col p-3 shadow-lg bg-slate-50 dark:bg-slate-600">
          <Sort />
          <SliderPrice price={options.price} />
          <div className="border rounded overflow-hidden dark:border-gray-700">
            <AccordingList title="type" value={options.types} />
            <AccordingList title="brand" value={options.brands} />
            <Options options={options.params} />
            <div className="">{children}</div>
          </div>
          <div className="mt-auto p-2 border rounded justify-end">
            <ButtonTheme />
          </div>
        </div>
      }
    </Slide>
  );
}
