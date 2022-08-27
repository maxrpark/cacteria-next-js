import sendEmail from "./sendEmail";
import { cartItem } from "../../ts/interfaces/interfaces";

interface successEmailInterface {
  email: "string";
  name: "";
  cart: cartItem[];
  total_amount: number;
}

const sendPurchaseEmail = ({
  email,
  name,
  cart,
  total_amount,
}: successEmailInterface) => {
  const orderDetails = cart.map((el: cartItem) => {
    const { name, price, amount } = el;
    return /*html*/ `
      <div
            style="
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                text-align: center;
            "
        >
            <p style="margin: 0">${name}</p>
            <p style="margin: 0">$${price}</p>
            <p style="margin: 0">${amount}</p>
            <p style="margin: 0">$${amount * price}  </p>
        </div>
    `;
  });
  const msg = /*html*/ `
  <p>Hello ${name}!</p>
  <p>Thank you for your purchase, we are already working on it.</p>
  <div
      style="
          border: 1px solid #89a894;
          max-width: 600px;
          border-radius: 5px;
      "
  >
      <h3 style="margin: 0; margin-top: 1rem; text-align: center">
          Purchase Details
      </h3>
      <div style="margin: 0.5rem">
          <div
              style="
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr;
                  text-align: center;
                  color: #89a894;
                  margin: 1rem 0;
                  border-bottom: 1px solid #89a894;
              "
          >
              <p style="margin: 0">Name</p>
              <p style="margin: 0">Price</p>
              <p style="margin: 0">Amount</p>
              <p style="margin: 0">Total</p>
          </div>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        ${orderDetails}
      </div>

      <div
          style="
              display: flex;
              justify-content: space-between;
              padding: 1rem;
              background: #89a894;
              margin-top: 1rem;
          "
      >
          <h4 style="margin: 0">Total</h4>
          <h4 style="margin: 0">$${total_amount}</h4>
      </div>
  </div>
  <p>If you any question please contact us.</p>
  <p>We hope to see you soon at <a href="http://localhost:3000/">Cacteria Shop.</a></p>
  <p>Cacteria</p>


  `;
  return sendEmail({
    to: email,
    subject: "We are preparing your order",
    html: msg,
  });
};

export default sendPurchaseEmail;
