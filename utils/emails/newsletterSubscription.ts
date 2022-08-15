import sendEmail from "./sendEmail";

interface newsletterEmailInt {
  email: string;
  name: string;
  code: string;
}

const newsletterSubscription = ({ email, name, code }: newsletterEmailInt) => {
  const msg = /*html*/ `
  <h2>Hello ${name}</h2>
  <p>Thank you for subscribing to our newsletter.</p>
  <h3>30% discount for your first purchase</h3>
  <p>This is your discount code ${code}, it can only be use once and expire in 60 days.</p>
  <p>To use your coupon visit <a href="http://localhost:3000/">Cacteria</a></p>
  <p>We hope to see you soon</p>
  <p>Cacteria</p>
  `;
  return sendEmail({
    to: email,
    subject: "Thank you for subscribing to our newsletter",
    html: msg,
  });
};

export default newsletterSubscription;
