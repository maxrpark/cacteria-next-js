import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../components";
let stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

  const getPaymentIntent = async () => {
    try {
      let res = await axios.post(
        "http://localhost:3000/api/checkout-sessions",
        {
          amount: 200,
        }
      );
      setClientSecret(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentIntent();
  }, []);

  if (!clientSecret) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <h2>{clientSecret}</h2>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </>
  );
};

export default checkout;
