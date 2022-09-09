import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

import axios from "axios";
import { useGlobalContext, useCartContext } from "../../context";

interface Props {
  sendEmailResponse: string;
}
const SuccessMessagePage: NextPage<Props> = ({ sendEmailResponse }) => {
  console.log(sendEmailResponse);

  const { clearCookies } = useGlobalContext();
  const { clearCart } = useCartContext();
  const handleClick = () => {
    clearCookies();
  };

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (!orderSucceeded) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };
  }
  const orderDetails = JSON.parse(orderSucceeded);
  const res = await axios.post(
    "https://cacteria-next-js.vercel.app/api/success-purchase",
    {
      ...orderDetails,
    }
  );

  return {
    props: {
      sendEmailResponse: await res.data.msg,
    },
  };
};
export default SuccessMessagePage;
