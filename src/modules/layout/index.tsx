/** @format */
import { ReactNode, useState } from "react";
import Footer from "@/components/footer";
import Header from "../header";
import Basket from "../basket";
import Auth from "../auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-500">
        {children}
      </div>
      <Footer />
      <Basket />
      <Auth />
      <ToastContainer />
    </>
  );
}
