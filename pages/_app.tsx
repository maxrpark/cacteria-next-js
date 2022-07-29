import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Footer, Navbar } from "../components";
import { CartProvider } from "../context/useCartContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <CartProvider>
        <Navbar />
        {/* <div className='container'> */}
        <Component {...pageProps} />
        {/* </div> */}
      </CartProvider>
      <Footer />
    </>
  );
}

export default MyApp;
