/** @format */

import Footer from "../../components/footer";
import Header from "../header";
import Basket from "../basket";
import Auth from "../auth";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import s from "./style.module.css";

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={s.container}>{children}</div>
      <Footer />
      <Basket />
      <Auth />
      <ToastContainer />
    </>
  );
}
