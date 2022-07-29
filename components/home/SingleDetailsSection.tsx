import React from "react";
import type { NextPage } from "next";
import { CompanyDetail } from "../../ts/interfaces";

const SingleDetailsSection: NextPage<CompanyDetail> = ({
  text,
  image,
  title,
}) => {
  return (
    <div className='single-detail-section row'>
      <div className='single-detail-section_text col-md-6'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className=' image-container col-md-6'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default SingleDetailsSection;
