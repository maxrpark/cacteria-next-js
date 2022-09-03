import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Footer, Navbar } from "../components";
import { CartProvider } from "../context/useCartContext";
import { GlobalProvider } from "../context/useGlobalContext";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <title>Cacteria</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalProvider>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </GlobalProvider>
    </>
  );
}

export default MyApp;
