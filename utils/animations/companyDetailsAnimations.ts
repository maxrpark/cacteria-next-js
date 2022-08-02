const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { TextPlugin } = require("gsap/dist/TextPlugin");
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const companyDetailsAnimations = (sections: HTMLDivElement[]) => {
  sections.forEach((section: HTMLDivElement, idx: number) => {
    gsap.set(section, {
      xPercent: idx % 2 == 0 ? 100 : -100,
    });
    const image = section.querySelector(".image-container img");

    const tl = gsap.timeline({ ease: "none" });

    tl.to(section, {
      xPercent: 0,
    })
      .to(
        image,
        {
          scale: 1,
        },
        0
      )
      .to(image, {
        y: "-20%",
      });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
      // end: () => "+=" + section.offsetHeight,
      scrub: 0.5,
      animation: tl,
    });
  });
};
export default companyDetailsAnimations;
