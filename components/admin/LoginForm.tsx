import { useState } from "react";
import { FormRow } from "../";
import { useAdminContext } from "../../context";
import { LoginFormInt } from "../../ts/interfaces/formInterfaces";

const loginData: LoginFormInt = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState(loginData);
  const { handleLogIn, isLoading } = useAdminContext();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCredentials((oldValue) => {
      let updated = { ...oldValue, [name]: value };
      return updated;
    });
  };

  return (
    <main className='page-height d-flex justify-content-center align-items-center'>
      <form className='order-md-1 section-form col-md-6 container mx-auto'>
        <h3 className='text-center mb-4'>Cacteria </h3>
        <div className='row gap-2'>
          <div className='col-12'>
            <FormRow
              name='email'
              type='email'
              formName='newsLetterFormValues'
              value={userCredentials.email}
              handleChange={handleFormChange}
            />
          </div>
          <div className='col-12'>
            <FormRow
              name='password'
              type='text'
              formName='newsLetterFormValues'
              value={userCredentials.password}
              handleChange={handleFormChange}
            />
          </div>
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleLogIn(userCredentials);
          }}
          className='btn btn-outline-secondary text-capitalize px-4 mt-2 me-md-2 fw-bold'
        >
          {isLoading ? (
            <span
              className='spinner-border spinner-border-sm'
              role='status'
              aria-hidden='true'
            ></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
