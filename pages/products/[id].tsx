import React from "react";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { SingleProduct } from "../../ts/interfaces";

interface Props {
  product: SingleProduct;
}

const Product: NextPage<Props> = ({ product }) => {
  const { name, desc, price, category } = product.fields;
  const image = product.fields.image[0].url;

  return (
    <>
      <h2>{name}</h2>
      <p>{desc}</p>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("https://cacteria.netlify.app/api/cacteria");
  const data = await res.data;
  const paths = data.map((item: any) => {
    return {
      params: { id: item.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await axios(`https://cacteria.netlify.app/api/product/?id=${id}`);
  const data = await res.data;

  return {
    props: {
      product: data,
    },
  };
};

export default Product;
