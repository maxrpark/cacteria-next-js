import React, { useState } from "react";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { SingleProduct, cartItem } from "../../ts/interfaces";
import { AmountButtons, PageTitle } from "../../components";
import { useCartContext } from "../../context/useCartContext";
import Link from "next/link";
interface Props {
  product: SingleProduct;
}

const Product: NextPage<Props> = ({ product }) => {
  const { addToCart } = useCartContext();
  const { name, desc, price, category, feature } = product.fields;
  const url = product.fields.image[0].url;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;
      return newAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  const item: cartItem = {
    id: product.id,
    name,
    url,
    category,
    price,
    desc,
    feature,
    amount: 1,
  };

  return (
    <main className='container m-auto page-height'>
      <PageTitle title={name} name={name} />
      <section className='row '>
        <div className='col-12 col-lg-8'>
          <img src={url} alt='' />
        </div>
        <div className='col-12 col-lg-4 d-flex flex-column justify-content-between align-items-center p-4 pb-0'>
          <div>
            <h2>{name}</h2>
            <p className='lead'>{desc}</p>
          </div>
          <div className='w-100'>
            <div className='d-flex justify-content-center align-items-center'>
              <AmountButtons
                increase={increase}
                decrease={decrease}
                amount={amount}
              />
            </div>
            <Link href='/cart'>
              <div
                className='btn btn-outline-secondary my-3 w-100 text-uppercase'
                onClick={() => addToCart({ ...item, amount })}
              >
                add to cart
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("https://cacteria.netlify.app/api/cacteria");
  const data = await res.data;
  const paths = data.map((item: SingleProduct) => {
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
