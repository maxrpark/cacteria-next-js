import type { NextPage } from "next";
import { useEffect } from "react";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
gsap.registerPlugin(ScrollTrigger);

const Newsletter: NextPage = () => {
  const newsLetterAnimation = () => {
    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: ".newsletter-container",
        start: "top center",
        end: () =>
          "+=" +
          (document.querySelector(
            "#newsletter__single-section"
          ) as HTMLElement)!.offsetHeight /
            2,
        toggleActions: "play none reverse pause",
        scrub: 0.2,
        markers: true,
        pinSpacing: true,
        pin: ".pin",
      },
    });
    tl.to("#newsletter__single-section", {
      yPercent: -100,
    });
    // tl.to(".section-form", {
    //   yPercent: -100,
    // });
  };

  useEffect(() => {
    newsLetterAnimation();
  }, []);

  return (
    <section className='newsletter-container d-flex flex-column position-relative'>
      <div className='newsletter__single-section section-form h-100 row  align-items-center p-2 p-md-4 bg-white'>
        <div className='container row  align-items-center p-2 p-md-4'>
          <div className='order-md-2 col-md-6 container mx-auto'>
            <h2
              className='display-3 fw-bold lh-3 pl mx-auto '
              style={{ maxWidth: "clamp(480px, 15vh, 300px)" }}
            >
              Monthly discount, tips and promotions.
            </h2>
          </div>
          <form className=' order-md-1 col-md-6 container mx-auto'>
            <h3 className='text-center mb-4'>Subscribe to our newsletter</h3>
            <div className='row gap-2'>
              <div className='col-12'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First name'
                />
              </div>
              <div className='col-12'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail4'
                  placeholder='Email'
                />
              </div>
            </div>
            <button className='btn btn-outline-secondary text-capitalize px-4 mt-2 me-md-2 fw-bold'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        id='newsletter__single-section'
        className='newsletter__single-section   h-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white'
      >
        <h2
          className='display-3 fw-bold lh-1 text-center p-2'
          style={{ fontSize: "clamp(6vh, 14vh, 48px)" }}
        >
          30% in the first <br /> purchase
        </h2>
        <h3 className='text-center mt-4'>Interested?</h3>
      </div>
    </section>
  );
};

export default Newsletter;
