import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContent";
import { makeServer } from "./../services/mirage/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV === "development");
  if (process.env.NODE_ENV === "development") {
    makeServer();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
