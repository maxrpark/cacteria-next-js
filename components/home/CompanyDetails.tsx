import { useEffect, useRef } from "react";
import SingleDetailsSection from "./SingleDetailsSection";
import { companyDetails } from "../../public/data";
import { companyDetailsAnimations } from "../../utils/animations";

const CompanyDetails: React.FC = () => {
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
    <section className=' container m-auto details-wrapper section-divition'>
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
