import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Footer, Navbar } from "../components";
import { CartProvider } from "../context/useCartContext";
import { GlobalProvider } from "../context/useGlobalContext";
import { SessionProvider } from "next-auth/react";
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

        <meta property='og:title' content='Cacteria' />
        <meta
          property='og:description'
          content={`The best play for cactus lovers`}
        />
        <meta property='og:image' content='/static/images/greenhouse.jpg' />
        <meta name='description' content={`The best play for cactus lovers`} />
      </Head>
      <SessionProvider>
        <GlobalProvider>
          <CartProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </CartProvider>
        </GlobalProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
