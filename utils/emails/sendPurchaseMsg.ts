import sendEmail from "./sendEmail";

interface successEmailInterface {
  email: "string";
  name: "";
}

const cart = [
  {
    id: "recGPvHwgtCQG5tSD",
    name: "Las españolas",
    price: 45,
    amount: 5,
  },
  {
    id: "recGPvHwgtCQG5tSD",
    name: "Las max",
    price: 145,
    amount: 2,
  },
];

const sendPurchaseEmail = ({ email, name }: successEmailInterface) => {
  const orderDetails = cart.map((el) => {
    const { name, price, amount } = el;
    return /*html*/ `
    <div>
    <p>${name}</p>
    <div>
    `;
  });
  const msg = /*html*/ `
  <h2>Hello ${name}</h2>
  <p>Thank you for your purchase, we are already working on it</p>

  <p>If you any question please contact us have an<a href="http://localhost:3000/">Cacteria</a></p>
  ${orderDetails}
  <p>We hope to see you soon</p>
  <p>Cacteria</p>

  `;
  return sendEmail({
    to: email,
    subject: "We are preparing your order",
    html: msg,
  });
};

export default sendPurchaseEmail;
