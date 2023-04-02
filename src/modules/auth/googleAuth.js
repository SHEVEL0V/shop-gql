/** @format */
import { GoogleLogin } from "@react-oauth/google";

import React from "react";

export default function GoogleAuth({ auth, error }) {
  return (
    <GoogleLogin
      onSuccess={(res) => auth({ token: res.credential })}
      onError={(error) => error(error.message)}
      useOneTap
    />
  );
}
