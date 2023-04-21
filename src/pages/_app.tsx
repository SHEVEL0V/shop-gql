/** @format */
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Apollo from "@/gql/settings";

import { Layout } from "@/modules/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ID || "";
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId={id}>
          <Apollo>
            <Layout>
              <Head>
                <title>Shop</title>
              </Head>
              <Component {...pageProps} />
            </Layout>
          </Apollo>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}
