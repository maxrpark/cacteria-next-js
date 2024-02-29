import Link from "next/link";
import { useCartContext } from "../../context";
import { ImCart } from "react-icons/im";

const CartIcon: React.FC = () => {
  const { total_items } = useCartContext();
  return (
    <Link href={"/cart"}>
      <div
        style={{
          width: "fit-content",
        }}
        className='position-relative cursor ms-md-3'
        data-bs-toggle='collapse'
        // data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        {total_items > 0 && (
          <small
            style={{
              width: "15px",
              height: "15px",
              fontSize: "10px",
              padding: ".5rem",
              top: "-5px",
              right: "-2px",
            }}
            className=' position-absolute  text-bg-light border border-dark rounded-circle d-flex justify-content-center align-items-center '
          >
            {total_items}
          </small>
        )}

        <ImCart className='mx-2' />
      </div>
    </Link>
  );
};

export default CartIcon;
