import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { testimonials } from "./../public/data";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { Draggable } = require("gsap/dist/Draggable");
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, ScrollTrigger);
}

const Testimonials: NextPage = () => {
  const mainContainer = useRef<HTMLDivElement>(null);
  const carrouselWrapper = useRef<HTMLDivElement>(null);
  const [minX, setMinX] = useState(0);

  const draggableCarrousel = () => {
    Draggable.create(carrouselWrapper.current, {
      type: "x",
      bounds: { minX: -minX, maxX: 0 },
    });
  };

  const setminXFunc = () => {
    setMinX(
      carrouselWrapper.current!.offsetWidth - mainContainer.current!.offsetWidth
    );
  };

  useEffect(() => {
    window.addEventListener("resize", setminXFunc);
    return () => window.removeEventListener("resize", setminXFunc);
  });

  useEffect(() => {
    if (mainContainer.current) {
      setminXFunc();
    }
    draggableCarrousel();
  }, [mainContainer.current, minX]);
  return (
    <section className=' bg-dark'>
      <div ref={mainContainer} className=' container overflow-hidden'>
        <div
          style={{ width: "fit-content" }}
          ref={carrouselWrapper}
          className='p-4 d-flex gap-3'
        >
          {testimonials.map((el) => {
            return (
              <div
                key={el.id}
                style={{ height: "400px", width: "90vw", maxWidth: "500px" }}
                className='single-testimony card flex-shrink-0 d-flex justify-content align-items-center p-3'
              >
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                  className='rounded-circle shadow'
                  src={el.image}
                  alt=''
                />
                <div className='details text-center' style={{ width: "300px" }}>
                  <h3 className='my-2'>{el.title}</h3>
                  <p className='mt-3'>{el.text}</p>
                  <p>{el.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
