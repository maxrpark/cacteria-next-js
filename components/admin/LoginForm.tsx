import { useState } from "react";
import { AlertMessage, FormRow } from "../";
import { useAdminContext, useGlobalContext } from "../../context";
import { LoginFormInt } from "../../ts/interfaces/formInterfaces";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const loginData: LoginFormInt = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState(loginData);
  const { handleLogIn, isLoading } = useAdminContext();
  const { alertMessageFunc, alertMessage } = useGlobalContext();

  const handleFormSubmit = async () => {
    if (!userCredentials.email || !userCredentials.password) {
      alertMessageFunc("Please provide all values", "danger");

      return;
    } else if (!regex.test(userCredentials.email)) {
      alertMessageFunc("Please enter a valid email", "danger");
      return;
    }
    const res = await handleLogIn(userCredentials);
    if (res.status === 401) {
      alertMessageFunc(res.error, "danger");
    }
  };

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
        {alertMessage.message && <AlertMessage {...alertMessage} />}
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          className='btn btn-secondary  text-capitalize px-4 mt-2 me-md-2 fw-bold w-100'
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
