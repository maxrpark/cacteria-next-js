import type { NextPage } from "next";
import SingleDetailsSection from "./SingleDetailsSection";
import { companyDetails } from "../../public/data";
import { useEffect, useRef } from "react";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { TextPlugin } = require("gsap/dist/TextPlugin");
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const CompanyDetails: NextPage = () => {
  const sections = useRef<HTMLDivElement[]>([]);
  const addToRef = (el: HTMLDivElement) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  const companyDetailsAnimations = () => {
    sections.current.forEach((section, idx) => {
      gsap.set(section, {
        xPercent: idx % 2 == 0 ? 100 : -100,
      });
      const title = section.querySelector(`.detail-title`);
      const text = section.querySelector(`.detail-text`);
      const image = section.querySelector(".image-container");

      const tl = gsap.timeline({ ease: "none" });

      tl.to(section, {
        xPercent: 0,
      }).to(image, {
        scale: 1.5,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        toggleActions: "play none none reverse",
        // stagger: 2,
        // end: "+=300",
        end: () => "+=" + section.offsetWidth,
        markers: true,
        scrub: 0.5,
        animation: tl,
        pin: ".details-wrapper",
        // pinSpacing: true,
      });
    });
  };

  useEffect(() => {
    companyDetailsAnimations();
  }, []);

  return (
    <section className='container details-wrapper my-4'>
      <h2 className=' my-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className='details-container overflow-hidden'>
        {companyDetails.map((item) => {
          return (
            <div className='details-wrapper' ref={addToRef} key={item.id}>
              <SingleDetailsSection {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyDetails;
