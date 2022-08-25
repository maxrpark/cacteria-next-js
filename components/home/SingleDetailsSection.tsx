import React from "react";
import type { NextPage } from "next";
import { CompanyDetail } from "../../ts/interfaces";
import style from "./SingleDetailsSection.module.css";

const SingleDetailsSection: NextPage<CompanyDetail> = ({
  text,
  image,
  title,
}) => {
  return (
    <div className={`row single-detail-section`}>
      <div className={`item col-md-6`}>
        <h4 className={`display-4`}>{title}</h4>
        <p style={{ lineHeight: "2rem" }} className={`h5 text-secondary`}>
          {text}
        </p>
      </div>
      <div
        className={`${style["image-container"]} item image-container col-md-6`}
      >
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default SingleDetailsSection;
