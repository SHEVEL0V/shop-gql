/** @format */
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Apollo from "@/gql/settings";

import { Layout } from "@/modules/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId={"process.env.NEXT_PUBLIC_GOOGLE_ID"}>
          <Apollo>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Apollo>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}
