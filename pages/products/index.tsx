import type { NextPage } from "next";
import axios from "axios";
import { Product } from "../../ts/interfaces";
import { useLayoutEffect } from "react";
import { PageTitle, SingleGridProduct } from "../../components";

const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

interface Props {
  products: Product[];
}
const Products: NextPage<Props> = ({ products }) => {
  const productsAnimation = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    gsap.set(".product-single", {
      y: 50,
      opacity: 0,
    });

    tl.to(".product-single", {
      y: 0,
      stagger: 0.03,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    productsAnimation();
  }, []);
  return (
    <main className='container products-wrapper m-auto page-height'>
      <PageTitle title='Our Products' />
      <div className='row g-0'>
        {products.map((item) => {
          return (
            <SingleGridProduct key={item.id} item={{ ...item, amount: 1 }} />
          );
        })}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios("https://cacteria.netlify.app/api/cacteria");
    const data = await res.data;

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Products;
