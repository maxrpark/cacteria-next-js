import React from "react";
import type { NextPage } from "next";
import { testimonials } from "./../public/data";

type Props = {};

const Testimonials: NextPage = (props: Props) => {
  return (
    <section className='testimonials-wrapper'>
      <div className='testimonials-container p-4'>
        {testimonials.map((el) => {
          return (
            <div
              style={{ height: "400px", maxWidth: "50vw" }}
              className='single-testimony card'
            >
              {el.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
