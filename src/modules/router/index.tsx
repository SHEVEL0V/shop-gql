/** @format */
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useRouter } from "next/router";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthAdmin = useAppSelector((s) => s.auth?.user?.role === "admin");
  const router = useRouter();

  useEffect(() => {
    if (!isAuthAdmin) {
      router.push({ pathname: "/" });
    }
  });

  return <div className="flex w-full">{children}</div>;
}
