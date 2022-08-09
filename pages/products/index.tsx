import type { NextPage } from "next";
import axios from "axios";
import { Product } from "../../ts/interfaces";
import Image from "next/image";
import Link from "next/link";
interface Props {
  products: Product[];
}
// id: string;
// category: string;
// desc: string;
// feature: string;
// name: string;
// url: string;
// price: number;
const Products: NextPage<Props> = ({ products }) => {
  return (
    <main className='container m-auto page-height'>
      <h2>Products all</h2>
      <div className='row g-0'>
        {products
          .map((item) => {
            const { name, url, desc, id } = item;
            return (
              <div
                key={id}
                className='product-single col-4 col-md-4 position-relative'
              >
                <Link href={`/products/${id}`}>
                  <div className='w-100 h-100'>
                    <Image
                      priority
                      src={url}
                      alt='Picture of the author'
                      width={200}
                      height={200}
                      layout='responsive'
                    />
                    <div
                      style={{ height: "100%", width: "100%" }}
                      className='position-absolute bg-black product-options'
                    ></div>
                  </div>
                </Link>
              </div>
            );
          })
          .slice(0, 1)}
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
