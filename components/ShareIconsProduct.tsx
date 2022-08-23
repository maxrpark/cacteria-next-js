import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { BsShareFill } from "react-icons/bs";

import gsap from "gsap";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

const ShareIconsProduct: NextPage = () => {
  const shareContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
  }, []);
  return (
    <div ref={shareContainer} className='product-icon'>
      <BsShareFill />
      <>
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
      </>
    </div>
  );
};

export default ShareIconsProduct;
