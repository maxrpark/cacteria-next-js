import type { NextPage } from "next";
import SingleDetailsSection from "./SingleDetailsSection";
import { companyDetails } from "../../public/data";

const CompanyDetails: NextPage = () => {
  return (
    <section className='container my-4'>
      <h2 className=' my-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className='details-container'>
        {companyDetails.map((item) => {
          return <SingleDetailsSection {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CompanyDetails;
