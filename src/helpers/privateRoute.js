/** @format */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthAdmin = useSelector((s) => s.auth?.user?.role === "admin");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthAdmin) {
      navigate("/");
    }
  });

  return <Outlet />;
}
