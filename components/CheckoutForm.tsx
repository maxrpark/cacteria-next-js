import type { NextPage } from "next";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { FormRow } from "./";
interface Props {
  clientSecret: any;
}
interface CheckOutValues {
  email: string;
  name: string;
}
const customerValues: CheckOutValues = {
  email: "",
  name: "",
};

const CheckoutForm: NextPage<Props> = ({ clientSecret }) => {
  const [customerDetails, setCustomerDetails] = useState(customerValues);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setIsError(false);
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
      switch (paymentIntent?.status) {
        case "succeeded":
          setIsSuccess(true);
          setMessage(
            "Payment succeeded! Check your email to see your orders details"
          );
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
      className='border-1 border-dark border rounded p-4 m-auto'
    >
      <div className='d-flex flex-column gap-2 justify-content-center'>
        <FormRow
          name='email'
          type='email'
          value={customerDetails.email}
          handleChange={handleFormChange}
        />
        <FormRow
          name='name'
          type='text'
          value={customerDetails.name}
          handleChange={handleFormChange}
        />
        <CardElement className='form-control' />
      </div>
      <button
        className='mt-3'
        disabled={isLoading || !stripe || !elements || isSuccess}
        id='submit'
      >
        <span id='button-text'>
          {isLoading ? (
            <div className='spinner ' id='spinner'></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {message && (
        <div
          className={`${
            isError ? "text-danger" : "text-success"
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
