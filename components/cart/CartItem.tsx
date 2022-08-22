import type { NextPage } from "next";
import AmountButtons from "../AmountButtons";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/useCartContext";
interface Props {
  id: string;
  category: string;
  desc: string;
  feature: string;
  name: string;
  url: string;
  price: number;
  amount: number;
}
const CartItem: NextPage<Props> = ({
  id,
  category,
  desc,
  feature,
  name,
  url,
  price,
  amount,
}) => {
  const { removeCartItem, toggleItemAmount, addToCart } = useCartContext();
  const increase = () => {
    toggleItemAmount(id, "inc");
  };
  const decrease = () => {
    toggleItemAmount(id, "dec");
  };
  return (
    <div
      style={{ minHeight: "80px" }}
      className='row align-items-center border-1 border-dark border-bottom my-4 py-2'
    >
      <div className='col-5 col-md-4 d-flex  justify-content-start gap-2'>
        <div className=' d-none d-md-block '>
          <Image src={url} alt='' width={70} height={70} />
        </div>
        <div className=''>
          <p className='m-0 '>{name}</p>
          <small className='m-0 d-none d-md-block'>Price: ${price}</small>
        </div>
      </div>
      <div className='col-4 col-md-4'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
      </div>

      <div className='col-2 p-0 col-md-3 text-center '>
        <h3 className='m-0'>${price * amount}</h3>
      </div>
      <div onClick={() => removeCartItem(id)} className='col-1 text-center'>
        <FaTrash className='cursor text-danger' />
      </div>
    </div>
  );
};

export default CartItem;
