import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { FormRow } from "./";
import { useCartContext } from "../context/useCartContext";
import { useGlobalContext } from "../context/useGlobalContext";
import { useRouter } from "next/router";
import style from "./CheckoutForm.module.css";

interface Props {
  clientSecret: any;
  stripeTotal: number;
  orderDetails: any;
}

const CheckoutForm: React.FC<Props> = ({
  clientSecret,
  stripeTotal,
  orderDetails,
}) => {
  const { cart } = useCartContext();
  const { handleFormChange, createOrder, costumerCheckoutInfo } =
    useGlobalContext();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setIsError(false);
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { paymentIntent } = await stripe.confirmCardPayment(
        orderDetails.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );
      try {
      } catch (error) {}
      switch (paymentIntent?.status) {
        case "succeeded":
          setIsSuccess(true);
          createOrder(orderDetails);
          setMessage("Payment succeeded! Soon you will be redirected");

          break;
        case "processing":
          setMessage("Your payment is processing.");
          setIsError(true);
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          setIsError(true);
          break;
        default:
          setMessage("Something went wrong. Check all values and try again.");
          setIsError(true);
          break;
      }
    } else {
      setMessage("All fields are required");
      setIsError(true);
    }
    setTimeout(() => {
      setMessage("");
    }, 2000);
    setIsLoading(false);
  };

  return (
    <form
      style={{ maxWidth: "550px" }}
      onSubmit={handleSubmit}
      className={`${style.checkoutForm} border-1 border-dark border rounded p-4 m-auto`}
    >
      <div className='d-flex flex-column gap-2 justify-content-center'>
        <FormRow
          name='email'
          type='email'
          formName='costumerCheckoutInfo'
          value={costumerCheckoutInfo.email}
          handleChange={handleFormChange}
        />
        <FormRow
          name='name'
          type='text'
          formName='costumerCheckoutInfo'
          value={costumerCheckoutInfo.name}
          handleChange={handleFormChange}
        />
        <CardElement className='form-control' />
      </div>
      <button
        className={`${style.checkoutBtn} mt-3`}
        disabled={isLoading || !stripe || !elements || isSuccess}
        id='submit'
      >
        <span id='button-text'>
          {isLoading ? (
            <div className={style.spinner} id='spinner'></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {message && (
        <div
          className={`${isError ? "text-danger" : "text-success"} ${
            style.paymentMessage
          } d-flex justify-content-center align-items-center`}
          id='payment-message'
        >
          <p>{message}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
