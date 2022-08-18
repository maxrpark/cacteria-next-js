import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/useCartContext";
import Link from "next/link";
import { PageTitle } from "../components";

const cart: NextPage = () => {
  const { cart } = useCartContext();
  const [cartItems, setCartItems] = useState() as any;

  useEffect(() => {
    setCartItems(cart);
  }, []);

  if (!cartItems) {
    return (
      <div className='page-height'>
        <h2>Loading</h2>
      </div>
    );
  }
  if (!cartItems?.length) {
    return (
      <div className='page-height'>
        <h2>Your cart is empty</h2>
        <Link href='/products' className=''>
          <button className='btn btn-secondary text-capitalize px-4 me-md-2'>
            Back products
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className='page-height'>
      <PageTitle title={"cart"} />
    </div>
  );
};

export default cart;
