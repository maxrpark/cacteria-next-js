import React from "react";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { SingleProductInt, Product } from "../../ts/interfaces/interfaces";
import {
  PageTitle,
  ShareIconsSingleProduct,
  SingleProduct,
} from "../../components";

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <main className='container m-auto page-height'>
      <PageTitle title={product.name} name={product.name} />
      <SingleProduct {...product} />
      <ShareIconsSingleProduct productID={product.id} />
    </main>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("https://cacteria.netlify.app/api/cacteria");
  const data = await res.data;
  const paths = data.map((item: SingleProductInt) => {
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

  const { name, desc, price, category, feature } = data.fields;
  const url = data.fields.image[0].url;

  const singleProduct: Product = {
    id: data.id,
    category,
    desc,
    feature,
    name,
    url,
    price,
  };

  return {
    props: {
      product: singleProduct,
    },
  };
};

export default ProductPage;
