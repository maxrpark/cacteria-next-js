import React from "react";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { SingleProduct, Product } from "../../ts/interfaces";
import { BreadCrumbs } from "../../components";
import { useCartContext } from "../../context/useCartContext";

interface Props {
  product: SingleProduct;
}

const Product: NextPage<Props> = ({ product }) => {
  const { addToCart } = useCartContext();
  const { name, desc, price, category, feature } = product.fields;
  const url = product.fields.image[0].url;

  const item: Product = {
    id: product.id,
    name,
    url,
    category,
    price,
    desc,
    feature,
  };

  return (
    <main className='container m-auto page-height'>
      <h2 className='display-2 fw-bold lh-1 mt-4'>{name}</h2>
      <BreadCrumbs name={name} />
      <section className='row '>
        <div className='col-md-6 col-lg-8'>
          <img src={url} alt='' />
        </div>
        <div className='col-md-6 col-lg-4 d-flex flex-column justify-content-between align-items-center p-4 pb-0'>
          <div>
            <h2>{name}</h2>
            <p className='lead'>{desc}</p>
          </div>
          <h2 onClick={() => addToCart(product.id, 1, item)}>add to cart</h2>
        </div>
      </section>
    </main>
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
