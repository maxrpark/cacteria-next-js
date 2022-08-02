import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import SingleDetailsSection from "./SingleDetailsSection";
import { companyDetails } from "../../public/data";
import { companyDetailsAnimations } from "../../utils/animations";

const CompanyDetails: NextPage = () => {
  const sections = useRef<HTMLDivElement[]>([]);
  const addToRef = (el: HTMLDivElement) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  useEffect(() => {
    companyDetailsAnimations(sections.current);
  }, []);

  return (
    <section className='container details-wrapper my-4'>
      <h2 className=' my-5 text-center'>
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
