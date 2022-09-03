import Head from "next/head";
import type { ReactElement } from "react";
import React from "react";
interface Props {
  children: ReactElement;
  title: string;
  name: string;
  img: string;
  dsc: string;
}

const ProductLayout: React.FC<Props> = ({
  children,
  title,
  name,
  img,
  dsc,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta property='og:description' content={`Take a look at ${name}`} />
        <meta property='og:image' content={img} />
        <meta name='description' content={dsc} />
      </Head>
      {children}
    </>
  );
};

export default ProductLayout;
