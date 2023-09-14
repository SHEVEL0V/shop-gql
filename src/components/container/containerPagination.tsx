/** @format */

import React from "react";
import Loader from "@/UI/loader";
import Pagination from "@/components/pagination";
import s from "./style.module.css";

type Props = { children: React.ReactNode; count: number; isLoading?: boolean };

export default function ContainerPagination({
  children,
  count,
  isLoading,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      {isLoading && <Loader />}
      {children}
      {<Pagination count={count} />}
    </div>
  );
}
