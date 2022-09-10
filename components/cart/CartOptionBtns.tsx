import Link from "next/link";
import { toast } from "react-toastify";

import { useCartContext } from "../../context";

const CartOptionBtns: React.FC = () => {
  const { clearCart } = useCartContext();
  const handleClick = () => {
    clearCart();
    toast("Cart cleared", {
      hideProgressBar: false,
      autoClose: 3000,
      type: "error",
      toastId: "error1",
      position: "bottom-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='d-flex justify-content-between my-3'>
      <Link href={"/products"}>
        <div className='btn btn btn-secondary'>Keep Shopping</div>
      </Link>

      <div onClick={handleClick} className='btn btn btn-outline-secondary'>
        Clear Cart
      </div>
    </div>
  );
};

export default CartOptionBtns;
