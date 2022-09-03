import React, { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  // useSession,
  getSession,
} from "next-auth/react";
import { FormRow } from "../../components";

const loginData = {
  email: "",
  password: "",
};

const AdminPage = () => {
  const [useCredentials, setUseCredentials] = useState(loginData);
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  // const { data: session, status } = useSession();

  const isLoggedIn = async () => {
    const res = await getSession();
    setIsLoading(true);
    if (res?.user !== null) {
      const user = res?.user;
      setUser(user);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleFormChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUseCredentials((oldValue) => {
      let updated = { ...oldValue, [name]: value };

      return updated;
    });
  };

  const handleLogIn = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      ...useCredentials,
    });
    console.log(res);
  };
  const checkSession = async () => {
    console.log(user);
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!user) {
    return (
      <form className='order-md-1 section-form col-md-6 container mx-auto'>
        <h3 className='text-center mb-4'>Subscribe to our newsletter</h3>
        <div className='row gap-2'>
          <div className='col-12'>
            <FormRow
              name='email'
              type='email'
              formName='newsLetterFormValues'
              value={useCredentials.email}
              handleChange={handleFormChange}
            />
          </div>
          <div className='col-12'>
            <FormRow
              name='password'
              type='text'
              formName='newsLetterFormValues'
              value={useCredentials.password}
              handleChange={handleFormChange}
            />
          </div>
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleLogIn();
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
    );
  }
  return (
    <div>
      <button onClick={handleLogIn} className='btn btn-secondary'>
        login
      </button>
      <button onClick={checkSession} className='btn btn-secondary'>
        check user
      </button>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className='btn btn-secondary'
      >
        logout
      </button>
    </div>
  );
};

export default AdminPage;
