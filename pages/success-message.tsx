import type { NextPage } from "next";

const successMessage: NextPage = () => {
  return (
    <main className='container'>
      <h1>Congratulation!</h1>
      <p>Please check your email, to see your orders details.</p>
      <button className='btn btn-secondary'>Back Home</button>
    </main>
  );
};

export default successMessage;
