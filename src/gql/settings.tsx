/** @format */

import { useAppSelector } from "@/redux/hooks";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

type Props = {
  children: React.ReactNode;
};

export default function Apollo({ children }: Props) {
  const token = useAppSelector((store) => store.auth.token);
  const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_BASE_URL });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
