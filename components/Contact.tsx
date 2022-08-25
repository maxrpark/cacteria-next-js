import React from "react";
import { NextPage } from "next";
import style from "./Contact.module.css";

const Contact: NextPage = () => {
  return (
    <section className='row container m-auto mt-4 justify-content-between section-divition p-3'>
      <div className={` order-md-2 col-lg-7 ${style.contactFormArea}`}>
        <h3 className='text-center'>Get in touch</h3>
        <form className=''>
          <div className='form-group my-2'>
            <label htmlFor='exampleFormControlInput1'>Name</label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput2'
              placeholder='your name'
            />
          </div>
          <div className='form-group my-2'>
            <label htmlFor='exampleFormControlInput2'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput2'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group my-2'>
            <label htmlFor='exampleFormControlInput3'>Subject</label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput3'
              placeholder='title'
            />
          </div>
          <div className='form-group my-2'>
            <label htmlFor='exampleFormControlTextarea1'>Your messege</label>
            <textarea
              className={`${style.textarea} form-control`}
              id='exampleFormControlTextarea1'
            ></textarea>
          </div>
        </form>
      </div>
      <div className='order-md-1 col-lg-5 p-0 mb-sm-4 mt-lg-0'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194355.24797206852!2d-104.56681764188923!3d28.482651393505257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2skr!4v1659585952588!5m2!1ses-419!2skr'
          width='100%'
          height='450'
          style={{ border: "0" }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
