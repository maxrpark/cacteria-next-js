import type { NextPage } from "next";
import Link from "next/link";

const ErrorPage404: NextPage = () => {
  return (
    <div className='page-height d-flex flex-column justify-content-center align-items-center'>
      <h2>Ups, nothing there!</h2>
      <Link href='/' className=''>
        <button className='btn btn-secondary text-capitalize px-4 me-md-2'>
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage404;
