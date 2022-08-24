import type { NextPage } from "next";

const successMessage: NextPage = () => {
  return (
    <main className='container page-height'>
      <h1>We are working in your order</h1>
      <p>Please check your email, to see your purchase details.</p>
      <button className='btn btn-secondary'>Back Home</button>
    </main>
  );
};

export default successMessage;
