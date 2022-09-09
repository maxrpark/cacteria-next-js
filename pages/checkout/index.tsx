import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CheckoutForm, PageTitle } from "../../components";
import { useCartContext } from "../../context/useCartContext";

let stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage: NextPage = () => {
  const { total_amount, cart } = useCartContext();
  const [clientSecret, setClientSecret] = useState("");
  const [stripeTotal, setStripeTotal] = useState(0);
  const [orderDetails, setOrderDetails] = useState();

  const getPaymentIntent = async () => {
    try {
      let res = await axios.post("/api/checkout-sessions", {
        cartItems: cart,
      });
      setOrderDetails(res.data);
      setClientSecret(res.data.clientSecret);
      setStripeTotal(res.data.total);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (total_amount) {
      getPaymentIntent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total_amount]);

  if (!clientSecret) {
    return (
      <div className='page-height d-flex justify-content-center align-items-center'>
        <h2 className='text-center'>Loading</h2>
      </div>
    );
  }
  return (
    <main className='container page-height'>
      <PageTitle title={"checkout"} />
      <h2 className='text-center m-3'>Total amount : ${total_amount}</h2>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm
          orderDetails={orderDetails!}
          clientSecret={clientSecret}
          stripeTotal={stripeTotal}
        />
      </Elements>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const canUserCheckout = req.cookies.canUserCheckout;

  if (canUserCheckout !== "canCheckout") {
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

export default CheckoutPage;
