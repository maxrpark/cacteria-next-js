import Link from "next/link";

import { useCartContext } from "../../context";

const CartOptionBtns: React.FC = () => {
  const { clearCart } = useCartContext();

  return (
    <div className='d-flex justify-content-between my-3'>
      <Link href={"/products"}>
        <div className='btn btn btn-secondary'>Keep Shopping</div>
      </Link>

      <div onClick={clearCart} className='btn btn btn-outline-secondary'>
        Clear Cart
      </div>
    </div>
  );
};

export default CartOptionBtns;
