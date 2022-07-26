import React, { useEffect } from "react";
import axios from "axios";
type Props = {};

const Products = (props: Props) => {
  const getData = async () => {
    const res = await axios("https://cacteria.netlify.app/api/cacteria");
    console.log();

    const data = await res.data;
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>Hello word</div>;
};

export default Products;
