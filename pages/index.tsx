import type { NextPage } from "next";
import axios from "axios";
import { Product } from "../ts/interfaces";
import { FeaturedProduct } from "../components";
interface Props {
  featuredProducts: Product[];
}

const Home: NextPage<Props> = ({ featuredProducts }) => {
  return (
    <>
      <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
        {featuredProducts.map((product: Product) => {
          return <FeaturedProduct key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await axios("https://cacteria.netlify.app/api/cacteria");
  const data = await res.data;
  const featuredProducts = data.filter(
    (product: Product) => product.feature === "True"
  );

  return {
    props: {
      featuredProducts: featuredProducts,
    },
  };
}

export default Home;
