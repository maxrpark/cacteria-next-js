import { useEffect } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

import { CartProvider, GlobalProvider, AdminProvider } from "../context";

import { Footer, Navbar } from "../components";
import { ToastContainer } from "react-toastify";
import LenisProvider from "../providers/LenisProvider";

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
          content={`The best place for cactus lovers`}
        />
        <meta property='og:image' content='/static/images/greenhouse.jpg' />
        <meta name='description' content={`The best play for cactus lovers`} />
      </Head>
      <SessionProvider>
        <GlobalProvider>
          <AdminProvider>
            <CartProvider>
              <LenisProvider>
                <Navbar />
                <Component {...pageProps} />
                <ToastContainer theme='colored' newestOnTop={true} />
                <Footer />
              </LenisProvider>
            </CartProvider>
          </AdminProvider>
        </GlobalProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
