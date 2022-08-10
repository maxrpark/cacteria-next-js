import type { NextPage } from "next";
import axios from "axios";
import { Product } from "../../ts/interfaces";
import Image from "next/image";
import Link from "next/link";
import { BsShareFill, BsSearch } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { useLayoutEffect, useRef } from "react";

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
      <h2>Products all</h2>
      <div className='row g-0'>
        {products.map((item) => {
          const { name, url, desc, id } = item;
          return (
            <div
              key={id}
              className='product-single col-4 col-md-4 position-relative'
            >
              <div className='w-100 h-100'>
                <Link href={`/products/${id}`}>
                  <Image
                    priority
                    src={url}
                    alt='Picture of the author'
                    width={200}
                    height={200}
                    layout='responsive'
                  />
                </Link>
                <div className='product-options'>
                  <p className='product-options__readmore'>
                    <CgMoreVertical className='product-options__readmore-icon' />
                  </p>
                  <BsShareFill />
                  <button className='btn btn-secondary'>add to cart</button>
                  <BsSearch />
                </div>
              </div>
            </div>
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
