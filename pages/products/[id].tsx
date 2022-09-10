import React from "react";
import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { SingleProductInt, Product } from "../../ts/interfaces/interfaces";
import {
  PageTitle,
  ShareIconsSingleProduct,
  SingleProduct,
  ProductLayout,
} from "../../components";

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <ProductLayout
      title={product.name}
      name={product.name}
      img={product.url}
      dsc={product.desc}
    >
      <main className='container m-auto my-5 page-height'>
        <PageTitle title={product.name} name={product.name} />
        <SingleProduct {...product} />
        <ShareIconsSingleProduct productID={product.id} />
      </main>
    </ProductLayout>
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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  let singleProduct: Product | null;

  try {
    const res = await axios(
      `https://cacteria.netlify.app/api/product/?id=${id}`
    );
    const data = await res.data;

    const { name, desc, price, category, feature } = data.fields;
    const url = data.fields.image[0].url;

    singleProduct = {
      id: data.id,
      category,
      desc,
      feature,
      name,
      url,
      price,
    };
  } catch (error) {
    singleProduct = null;
  }

  if (!singleProduct) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      product: singleProduct,
    },
    revalidate: 10,
  };
};

export default ProductPage;
