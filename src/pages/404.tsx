/** @format */

import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  return (
    <div className=" w-full p-10 flex flex-col text ">
      <h1 className=" text-9xl text-center mb-5 ">404 </h1>
      <p className="text-center text-3xl mb-10">Ooops!!</p>
      <Button
        sx={{ marginInline: "auto" }}
        variant="contained"
        onClick={() => router.push("/")}
      >
        Go Back to Home
      </Button>
    </div>
  );
}
