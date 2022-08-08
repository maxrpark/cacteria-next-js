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
      {products
        .map((item) => {
          const { name, url, desc, id } = item;
          return (
            <div
              style={{ height: "200px" }}
              className='col-6 col-md-3 col-lg-3'
              key={id}
            >
              <Link
                href={`/products/${id}`}
                className='col-12 col-md-6 col-lg-4'
              >
                <div className='w-100 h-100'>
                  <Image
                    priority
                    src={url}
                    alt='Picture of the author'
                    width={200}
                    height={200}
                    layout='responsive'
                  />
                </div>
              </Link>
            </div>
          );
        })
        .slice(0, 1)}
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
