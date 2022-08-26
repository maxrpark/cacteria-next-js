import { useEffect, useState, FormEvent } from "react";
import { newsLetterAnimation } from "../../utils/animations";
import style from "./Newsletter.module.css";
import { FormRow } from "../";
import { useGlobalContext } from "../../context/useGlobalContext";

interface newsLetterValues {
  email: string;
  name: string;
}

const userFormValues: newsLetterValues = {
  email: "",
  name: "",
};

const Newsletter: React.FC = () => {
  const { subscribeToNewsletter } = useGlobalContext();

  const [userValues, setUserValues] = useState(userFormValues);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userValues.name || !userValues.email) {
      console.log("please provide all values");
    } else {
      subscribeToNewsletter(userValues);
    }
  };
  useEffect(() => {
    newsLetterAnimation();
  }, []);

  return (
    <div className='pin section-divition'>
      <section
        className={`${style.newsletterContainer} newsletter-container d-flex align-items-center flex-column position-relative`}
      >
        <div
          className={`${style.newsletterSingleSection} container  h-100 row  align-items-center p-2 p-md-4 my-auto bg-white`}
        >
          <div className='  overflow-hidden  h-100 row  align-items-center p-2 p-md-4 '>
            <div className=' order-md-2 section-form col-md-6 container mx-auto '>
              <h2
                className='display-3 fw-bold lh-3 pl mx-auto '
                style={{ maxWidth: "clamp(480px, 15vh, 300px)" }}
              >
                Monthly discounts, tips and promotions.
              </h2>
            </div>
            <form className='order-md-1 section-form col-md-6 container mx-auto'>
              <h3 className='text-center mb-4'>Subscribe to our newsletter</h3>
              <div className='row gap-2'>
                <div className='col-12'>
                  <FormRow
                    name='email'
                    type='email'
                    value={userValues.email}
                    handleChange={handleFormChange}
                  />
                </div>
                <div className='col-12'>
                  <FormRow
                    name='name'
                    type='text'
                    value={userValues.name}
                    handleChange={handleFormChange}
                  />
                </div>
              </div>
              <button
                onClick={(e) => handleFormSubmit(e)}
                className='btn btn-outline-secondary text-capitalize px-4 mt-2 me-md-2 fw-bold'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          id='newsletter__single-section'
          className={`${style.newsletterSingleSection} h-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white`}
        >
          <h2
            className='newsletter-title display-3 fw-bold lh-1 text-center p-2'
            style={{ fontSize: "clamp(6vh, 14vh, 48px)" }}
          ></h2>
          <h3
            className={`${style.newsletterText} newsletter-text text-center mt-4`}
          >
            Interested?
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
