const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { TextPlugin } = require("gsap/dist/TextPlugin");
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const newsLetterAnimation = () => {
  gsap.to(".newsletter-title", {
    ease: "none",
    text: { value: "20% in the first <br /> purchase" },
    scrollTrigger: {
      trigger: ".pin",
      start: "top 70%",
      end: "+=200px",
      scrub: 0.6,
    },
  });

  const tl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".newsletter-container",
      start: "top center",

      end: () =>
        "+=" +
        (document.querySelector("#newsletter__single-section") as HTMLElement)!
          .offsetHeight,
      toggleActions: "play none reverse pause",
      scrub: 0.6,
      pin: ".pin",
    },
  });
  tl.to("#newsletter__single-section", {
    yPercent: -100,
    ease: "none",
  }).to(
    ".newsletter-text",
    {
      opacity: 1,
    },
    0.2
  );
  // .to(
  //   ".section-form",
  //   {
  //     yPercent: 0,
  //     immediateRender: false,
  //   },
  //   0.4
  // );
};
export default newsLetterAnimation;
