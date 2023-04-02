/** @format */
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { router } from "./router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

function App() {
  const token = useSelector((store) => store.auth.token);

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: authLink.concat(
      createUploadLink({
        uri: process.env.REACT_APP_BASE_URL,
      })
    ),
  });

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />;
    </ApolloProvider>
  );
}

export default App;
