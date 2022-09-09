import Link from "next/link";
import React, { useState } from "react";
import AmountButtons from "../AmountButtons";
import { useCartContext } from "../../context/useCartContext";
import { CartItemInt, Product } from "../../ts/interfaces/interfaces";
import Image from "next/image";

const SingleProduct: React.FC<Product> = ({ name, desc, price, url, id }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const item: CartItemInt = {
    id,
    name,
    image: url,
    price,
    amount: 1,
  };

  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;
      return newAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <section className='row '>
      <div className='col-12 col-lg-8'>
        <div className=''>
          <Image src={url} height={570} width={890} alt={name} />
        </div>
      </div>
      <div className='col-12 col-lg-4 d-flex flex-column justify-content-between align-items-center p-4 pb-0'>
        <div>
          <h2>{name}</h2>
          <p className='lead'>{desc}</p>
        </div>
        <div className='w-100'>
          <div className='d-flex justify-content-center align-items-center'>
            <AmountButtons
              increase={increase}
              decrease={decrease}
              amount={amount}
            />
          </div>
          <Link href='/cart'>
            <div
              className='btn btn-outline-secondary my-3 w-100 text-uppercase'
              onClick={() => addToCart({ ...item, amount })}
            >
              add to cart
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
