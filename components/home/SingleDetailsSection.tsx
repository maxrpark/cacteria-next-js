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
      <div className='item single-detail-section_text col-md-6'>
        <h4 className='detail-title display-4'>{title}</h4>
        <p
          style={{ lineHeight: "2rem" }}
          className='detail-text h5 text-secondary'
        >
          {text}
        </p>
      </div>
      <div className='item image-container col-md-6'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default SingleDetailsSection;
