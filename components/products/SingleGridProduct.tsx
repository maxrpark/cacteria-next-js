import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsShareFill, BsSearch } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";

interface Props {
  id: string;
  url: string;
  name: string;
  price: number;
}

const SingleGridProduct: NextPage<Props> = ({ id, url, name, price }) => {
  return (
    <div className='product-single col-4 col-md-4 position-relative'>
      <div className='w-100 h-100'>
        <Link href={`/products/${id}`}>
          <Image
            priority
            src={url}
            alt='Picture of the author'
            width={200}
            height={200}
            layout='responsive'
          />
        </Link>
        <div className='product-options text-light p-3 d-flex flex-column justify-content-around align-items-center'>
          <p className='product-options__readmore '>
            <CgMoreVertical className='product-options__readmore-icon' />
          </p>
          <div className='product-options__dsc text-center d-md-flex flex-column justify-content-center align-items-center'>
            <p className='m-0 display-5 '>
              <Link href={`/products/${id}`}>{name}</Link>
            </p>
            <p className='m-0 display-6 d-none d-md-block fw-bold'>${price}</p>
          </div>
          <div className='product-icon-wrapper d-none d-md-flex  justify-content-center align-items-center gap-3 mb-4'>
            <div className='product-icon'>
              <BsShareFill />
            </div>
            <button className='btn btn-secondary btn-dm'>add to cart</button>
            <Link href={`/products/${id}`}>
              <div className='product-icon'>
                <BsSearch />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGridProduct;
