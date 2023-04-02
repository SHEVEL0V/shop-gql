/** @format */

import React from "react";
import Loader from "../loader";
import Pagination from "../../components/pagination";
import s from "./style.module.css";

export default function ListContainer({ children, count, isLoading }) {
  return (
    <div className={s.container}>
      {isLoading && <Loader />}
      {children}
      {isLoading || <Pagination count={count} />}
    </div>
  );
}
