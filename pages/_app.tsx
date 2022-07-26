import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { Footer, Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
