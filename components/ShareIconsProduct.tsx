import { useEffect, useRef } from "react";
import { BsShareFill } from "react-icons/bs";
import { shareIcons } from "../public/shareIconsData";

import gsap from "gsap";

const ShareIconsProduct: React.FC = () => {
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
    const wrappers = document.querySelectorAll(".product-icon-wrapper")!;
    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("mouseleave", () => {
        const shareBtns =
          shareContainer.current?.querySelectorAll(".shareIcon");
        shareBtns?.forEach((el) => {
          gsap.to(el, {
            yPercent: 0,
            zIndex: -1,
            opacity: 0,
          });
        });
      });
    });
  }, []);
  return (
    <div ref={shareContainer} className='product-icon'>
      <BsShareFill />
      <>
        {shareIcons.map((icon: any) => {
          const { Wrapper, Icon, url, id, hashtag } = icon;

          return (
            <div key={id} className='shareIcon'>
              <Wrapper url={url} hashtag={hashtag}>
                <Icon size={32} round />
              </Wrapper>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ShareIconsProduct;
