import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsShareFill, BsSearch } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";
import { useCartContext } from "../../context/useCartContext";
import { cartItem } from "../../ts/interfaces";
import { useRef } from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import gsap from "gsap";
interface Props {
  item: cartItem;
}

const SingleGridProduct: NextPage<Props> = ({ item }) => {
  const { id, url, name, price } = item;
  const { addToCart } = useCartContext();
  const shareContainer = useRef<HTMLDivElement>(null);

  shareContainer.current?.addEventListener("mouseenter", () => {
    const shareBtns = shareContainer.current?.querySelectorAll(".shareIcon");
    shareBtns?.forEach((el, idx) => {
      gsap.to(el, {
        yPercent: -110 * idx,
        opacity: 1,
        zIndex: 1,
      });
    });
  });
  shareContainer.current?.addEventListener("mouseleave", () => {
    const shareBtns = shareContainer.current?.querySelectorAll(".shareIcon");
    shareBtns?.forEach((el) => {
      gsap.to(el, {
        yPercent: 0,
        opacity: 0,
        zIndex: 0,
      });
    });
  });

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
            <div ref={shareContainer} className='product-icon'>
              <BsShareFill />
              <div className='shareIcon'>
                <FacebookShareButton
                  url={"https://github.com/next-share"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#nextshare"}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div className='shareIcon'>
                <PinterestShareButton
                  url={"https://github.com/next-share"}
                  media={
                    "next-share is a social share buttons for your next React apps."
                  }
                >
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
              </div>
              <div className='shareIcon'>
                <TwitterShareButton
                  url={"https://github.com/next-share"}
                  title={
                    "next-share is a social share buttons for your next React apps."
                  }
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
            </div>
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
