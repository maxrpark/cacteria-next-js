import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "../../public/data";
import { ImQuotesRight } from "react-icons/im";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { Draggable } = require("gsap/dist/Draggable");
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, ScrollTrigger);
}

const Testimonials: React.FC = () => {
  const mainContainer = useRef<HTMLDivElement>(null);
  const carrouselWrapper = useRef<HTMLDivElement>(null);
  const [minX, setMinX] = useState(0);

  const draggableCarrousel = () => {
    Draggable.create(carrouselWrapper.current, {
      type: "x",
      bounds: { minX: -minX, maxX: 0 },
    });
  };

  const setMinXFunc = () => {
    setMinX(
      carrouselWrapper.current!.offsetWidth - mainContainer.current!.offsetWidth
    );
  };

  useEffect(() => {
    window.addEventListener("resize", setMinXFunc);
    return () => window.removeEventListener("resize", setMinXFunc);
  });

  useEffect(() => {
    if (mainContainer.current) {
      setMinXFunc();
    }

    draggableCarrousel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainContainer.current, minX]);
  return (
    <section
      style={{ height: "500px" }}
      className='bg-dark  d-flex justify-content-center align-items-center'
    >
      <div ref={mainContainer} className='p-0 container overflow-hidden'>
        <div
          style={{ width: "fit-content" }}
          ref={carrouselWrapper}
          className='p-3 d-flex gap-3'
        >
          {testimonials.map((el) => {
            return (
              <div
                key={el.id}
                style={{ height: "400px", width: "90vw", maxWidth: "500px" }}
                className='single-testimony card flex-shrink-0 d-flex justify-content align-items-center p-3'
              >
                <div
                  style={{ width: "190px", height: "190px" }}
                  className='rounded-circle shadow d-flex'
                >
                  <Image
                    src={el.image}
                    height={190}
                    width={190}
                    alt={el.name}
                    className='rounded-circle'
                  />
                </div>
                <div className='details text-center' style={{ width: "300px" }}>
                  <p className='mt-2 mb-0 '>{el.name}</p>
                  <h3 className='my-2 '>{el.title}</h3>
                  <p className=''>{el.text}</p>
                  <ImQuotesRight className=' display-6' />
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
