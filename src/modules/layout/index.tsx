/** @format */
import { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "../header";
import Basket from "../basket";
import Auth from "../auth";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  const router = useRouter();

  const visibilityBasket =
    router.pathname.includes("user") || router.pathname.includes("admin");

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-500">
        {children}
      </div>
      <Footer />
      {!visibilityBasket && <Basket />}
      <Auth />
      <ToastContainer />
    </>
  );
}
