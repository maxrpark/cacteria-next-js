import type { NextPage } from "next";

const SuccessMessagePage: NextPage = () => {
  return (
    <main className='container page-height d-flex flex-column justify-content-center'>
      <div className='text-center'>
        <h1 className='display-4'>We are working in your order</h1>
        <p className='lead'>
          Please check your email, to see your purchase details.
        </p>
        <button className='btn btn-secondary mt-2'>Back Home</button>
      </div>
    </main>
  );
};

export default SuccessMessagePage;
