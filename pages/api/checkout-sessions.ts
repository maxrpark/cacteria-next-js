import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { cartItem } from "../../ts/interfaces/interfaces";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-08-01",
});

export const CURRENCY = "usd";
export const MIN_AMOUNT = 5.0;
export const MAX_AMOUNT = 5000.0;
export const AMOUNT_STEP = 5.0;

export function formatAmountForStripe(amount: number): number {
  return Math.round(amount * 100);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { cartItems } = req.body;

    const cart_total = cartItems.reduce((acc: number, curr: cartItem) => {
      let itemTotal = curr.amount * curr.price;
      acc = acc + itemTotal;
      return acc;
    }, 0);

    try {
      const params: Stripe.PaymentIntentCreateParams = {
        payment_method_types: ["card"],
        amount: formatAmountForStripe(cart_total),
        currency: CURRENCY,
      };
      const payment_intent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create(params);

      res.status(200).json(payment_intent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
