/** @format */

import React from "react";
import Loader from "@/UI/loader";
import Pagination from "@/components/pagination";
import s from "./style.module.css";

type Props = { children: React.ReactNode; count: number; isLoading?: boolean };

export default function ListContainer({ children, count, isLoading }: Props) {
  return (
    <div className={s.container}>
      {isLoading && <Loader />}
      {children}
      {<Pagination count={count} />}
    </div>
  );
}
