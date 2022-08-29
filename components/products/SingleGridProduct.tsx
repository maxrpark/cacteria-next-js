import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { useCartContext } from "../../context/useCartContext";
import { CartItemInt, Product } from "../../ts/interfaces/interfaces";
import ShareIconsProduct from "../product/ShareIconsProduct";
import style from "./SingleGridProduct.module.css";

interface Props {
  item: Product;
}

const SingleGridProduct: React.FC<Props> = ({ item }) => {
  const { id, url, name, price } = item;
  const { addToCart } = useCartContext();

  const cartItem: CartItemInt = {
    id,
    name,
    image: url,
    price,
    amount: 1,
  };

  return (
    <div
      id={item.id}
      className={`${style.productSingle} product-single col-4 col-md-4 position-relative cursor `}
    >
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
        <div
          className={` ${style.productOptions} text-light p-3 d-flex flex-column justify-content-around align-items-center`}
        >
          <p className={`${style.productOptionsReadMore}`}>
            <CgMoreVertical className={`${style.productOptionsReadMoreIcon}`} />
          </p>
          <div
            className={`${style.productOptionsDsc} text-center d-md-flex flex-column justify-content-center align-items-center`}
          >
            <p className='m-0 display-5 '>
              <Link href={`/products/${id}`}>{name}</Link>
            </p>
            <p className='m-0 display-6 d-none d-md-block fw-bold'>${price}</p>
          </div>
          <div
            className={`${style.productIconWrapper} product-icon-wrapper d-none d-md-flex  justify-content-center align-items-center gap-3 mb-4`}
          >
            <ShareIconsProduct productID={id} />
            <button
              style={{ maxWidth: "110px" }}
              onClickCapture={() => addToCart(cartItem)}
              className='btn btn-secondary btn-dm'
            >
              add to cart
            </button>
            <Link href={`/products/${id}`}>
              <div className={style.productIcon}>
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
