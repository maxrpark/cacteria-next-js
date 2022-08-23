import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { useCartContext } from "../../context/useCartContext";
import { cartItem } from "../../ts/interfaces";
import ShareIconsProduct from "../ShareIconsProduct";
interface Props {
  item: cartItem;
}

const SingleGridProduct: NextPage<Props> = ({ item }) => {
  const { id, url, name, price } = item;
  const { addToCart } = useCartContext();

  return (
    <div className='product-single col-4 col-md-4 position-relative'>
      <div className='w-100 h-100'>
        <Link href={`/products/${id}`}>
          <div>
            <Image
              priority
              src={url}
              alt='Picture of the author'
              width={200}
              height={200}
              layout='responsive'
            />
          </div>
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
            <ShareIconsProduct />
            <button
              style={{ maxWidth: "110px" }}
              onClickCapture={() => addToCart(item)}
              className='btn btn-secondary btn-dm'
            >
              add to cart
            </button>
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
