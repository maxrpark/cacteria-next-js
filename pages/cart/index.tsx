import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import { useCartContext } from "../../context/useCartContext";
import { PageTitle, CartItem, CartTotal } from "../../components";
import { CartItemInt } from "../../ts/interfaces/interfaces";

const CartPage: NextPage = () => {
  const { cart, total_amount, clearCookies } = useCartContext();
  const [cartItems, setCartItems] = useState<CartItemInt[]>([]);

  useEffect(() => {
    setCartItems(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (cart.length === 0) {
      clearCookies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  if (!cartItems) {
    return (
      <div className='page-height'>
        <h2>Loading</h2>
      </div>
    );
  }
  if (!cartItems?.length || total_amount === 0) {
    return (
      <div className='page-height d-flex flex-column justify-content-center align-items-center'>
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
    <main className='container m-auto page-height position-relative'>
      <PageTitle title={"cart"} />
      <div className='row p-2 justify-content-between'>
        <div className='col-lg-8'>
          {cart.map((item: CartItemInt) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <CartTotal total_amount={total_amount} />
      </div>
    </main>
  );
};

export default CartPage;
