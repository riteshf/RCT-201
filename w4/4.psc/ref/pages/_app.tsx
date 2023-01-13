import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { store } from "../redux/store";

// css
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ChakraProvider>
  );
}
