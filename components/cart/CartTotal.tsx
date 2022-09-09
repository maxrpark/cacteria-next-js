import Link from "next/link";

type Props = {
  total_amount: number;
};

const CartTotal: React.FC<Props> = ({ total_amount }) => {
  return (
    <div
      style={{ maxHeight: "300px" }}
      className='col-lg-3 d-flex justify-content-between flex-column gap-3 text-center border-1 border-dark border rounded
        p-3 mt-4 sticky-top '
    >
      <h2 className='my-0 d-flex justify-content-center align-items-center'>
        Total
      </h2>
      <h2 className='my-0 d-flex justify-content-center align-items-center'>
        ${total_amount}
      </h2>
      <Link href='/checkout'>
        <button className='btn btn-outline-secondary btn-lg btn-block'>
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
