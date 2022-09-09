import { useEffect, useRef } from "react";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import style from "./SectionTitle.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }) => {
  const sectionsTitle = useRef<HTMLDivElement[]>([]);

  const addToRef = (el: HTMLDivElement) => {
    if (el && !sectionsTitle.current.includes(el)) {
      sectionsTitle.current.push(el);
    }
  };
  const sectionTitleAnimation = () => {
    sectionsTitle.current.forEach((element) => {
      const clipped = element.querySelector(".clipped");
      const titles = element.querySelector(".front-text");
      const tl = gsap.timeline();
      ScrollTrigger.create({
        trigger: element,
        start: "bottom 100%",
        toggleActions: "play none none reverse",
        end: () => "+=400",
        scrub: 0.5,
        animation: tl,
      });
      tl.to(clipped, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      }).to(element, {
        background: "#212529",
      });
    });
  };
  useEffect(() => {
    sectionTitleAnimation();
  }, []);
  return (
    <div className={`${style.sectionTitleContainer} p-0`} ref={addToRef}>
      <h2
        className={`${style.sectionTitle} display-1 fw-bold lh-3 front-text text-capitalize`}
      >
        {text}
      </h2>
      <h2
        className={`clipped ${style.sectionTitle} display-1 fw-bold lh-3 bg-dark text-white text-capitalize`}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
