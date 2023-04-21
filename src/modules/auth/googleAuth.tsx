/** @format */
import { GoogleLogin } from "@react-oauth/google";

type Props = {
  auth: (token?: string) => void;
  error: ({ message }: { message: string }) => void;
};

export default function GoogleAuth({ auth, error }: Props) {
  return (
    <GoogleLogin
      onSuccess={(res) => auth(res.credential)}
      onError={() => error({ message: "Error authentication google" })}
      useOneTap
    />
  );
}
