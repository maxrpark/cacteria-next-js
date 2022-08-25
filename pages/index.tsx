import type { NextPage } from "next";
import axios from "axios";
import { Product } from "../ts/interfaces";
import {
  FeaturedProduct,
  HeroHome,
  CompanyDetails,
  Newsletter,
  Testimonials,
  Contact,
  SectionTitle,
} from "../components";

interface Props {
  featuredProducts: Product[];
}

const Home: NextPage<Props> = ({ featuredProducts }) => {
  return (
    <div>
      <HeroHome />
      <main>
        {/* <SectionTitle text='Featured Products' />
        <div className='row g-2 g-lg-3 mx-auto container section-divition'>
          {featuredProducts.map((product: Product) => {
            return (
              <div
                style={{ height: "300px" }}
                className='col-md-6 col-lg-4'
                key={product.id}
              >
                <FeaturedProduct product={product} />
              </div>
            );
          })}
        </div>
        <Newsletter />
        <SectionTitle text='Why us?' />
        <div className='section-divition'>
          <CompanyDetails />
        </div>

        <SectionTitle text='Testimonials' />
        <Testimonials /> */}
        {/* <SectionTitle /> */}
        <Contact />
      </main>
    </div>
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
