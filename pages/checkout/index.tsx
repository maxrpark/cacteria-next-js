import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm, PageTitle } from "../../components";
import { useCartContext } from "../../context/useCartContext";
import { NextPage } from "next";
let stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage: NextPage = () => {
  const { total_amount, cart } = useCartContext();
  const [clientSecret, setClientSecret] = useState("");
  const [stripeTotal, setStripeTotal] = useState(0);

  const getPaymentIntent = async () => {
    try {
      let res = await axios.post("/api/checkout-sessions", {
        cartItems: cart,
      });

      setClientSecret(res.data.client_secret);
      setStripeTotal(res.data.amount / 100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (total_amount) {
      getPaymentIntent();
    }
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
        <CheckoutForm clientSecret={clientSecret} stripeTotal={stripeTotal} />
      </Elements>
    </main>
  );
};

export default CheckoutPage;
