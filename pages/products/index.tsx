import { useEffect, useState } from "react";
import type { NextPage } from "next";
import axios from "axios";

import { Product } from "../../ts/interfaces/interfaces";

import { Filters, PageTitle, SingleGridProduct } from "../../components";

const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);
import { updateFilterAnimation } from "../../utils/animations";

interface Props {
  products: Product[];
  allCategories: string[];
}
const ProductsPage: NextPage<Props> = ({ products, allCategories }) => {
  const [filters, setFilters] = useState({ category: "all" });

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let target = e.target as HTMLButtonElement;

    setFilters((oldValues) => {
      let newValue = {
        ...oldValues,
        [target.name]: target.value,
      };
      return newValue;
    });
  };

  useEffect(() => {
    updateFilterAnimation(products, filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  useEffect(() => {
    productsAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className='container products-wrapper m-auto mb-5 page-height'>
      <PageTitle title='Our Products' />
      <Filters allCategories={allCategories} handleClick={handleClick} />
      <div className='row g-0'>
        {products.map((item) => {
          return <SingleGridProduct key={item.id} item={{ ...item }} />;
        })}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios("https://cacteria.netlify.app/api/cacteria");
    const data = await res.data;

    const allCategories = [
      "all",
      ...new Set(data.map((item: Product) => item.category)),
    ];

    return {
      props: {
        products: data,
        allCategories,
      },
      revalidate: 360, // In seconds
      // revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductsPage;
