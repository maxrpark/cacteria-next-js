import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useGlobalContext, useCartContext } from "../../context";
const SuccessMessagePage: NextPage = () => {
  const { clearCookies } = useGlobalContext();
  const { clearCart } = useCartContext();
  const handleClick = () => {
    clearCookies();
    clearCart();
  };

  return (
    <main className='container page-height d-flex flex-column justify-content-center'>
      <div className='text-center'>
        <h1 className='display-4'>We are working in your order</h1>
        <p className='lead'>
          Please check your email, to see your purchase details.
        </p>

        <button onClick={handleClick} className='btn btn-secondary mt-2'>
          Back Home
        </button>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const orderSucceeded = req.cookies.isOrderCompleted;

  if (orderSucceeded !== "isCompleted") {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};
export default SuccessMessagePage;
