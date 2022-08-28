import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/useCartContext";
import Link from "next/link";
import { PageTitle, CartItem, CartTotal } from "../../components";
import { cartItem } from "../../ts/interfaces/interfaces";

const CartPage: NextPage = () => {
  const { cart, total_amount } = useCartContext();
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
          {cart.map((item: cartItem) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <CartTotal total_amount={total_amount} />
      </div>
    </main>
  );
};

export default CartPage;
