import type { NextPage } from "next";
import { useEffect, useRef } from "react";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

const SectionTitle: NextPage = () => {
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
        start: "top center",
        toggleActions: "play none none reverse",
        end: () => "+=200",
        scrub: 0.5,
        animation: tl,
      });
      tl.to(clipped, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      }).to(titles, {
        background: "#212529",
      });
    });
  };
  useEffect(() => {
    sectionTitleAnimation();
  }, []);
  return (
    <div className='section-title-container p-0' ref={addToRef}>
      <h2 className='section-title display-1 fw-bold lh-3 front-text'>
        SectionTitle
      </h2>
      <h2 className='clipped section-title display-1 fw-bold lh-3 bg-dark text-white'>
        SectionTitle
      </h2>
    </div>
  );
};

export default SectionTitle;
