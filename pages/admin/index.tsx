import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { FormRow } from "../../components";
import { useAdminContext } from "../../context";

const loginData = {
  email: "",
  password: "",
};

const AdminPage: NextPage = () => {
  const { checkSession, handleLogIn, isLoading, user } = useAdminContext();
  const [userCredentials, setUserCredentials] = useState(loginData);

  const handleFormChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCredentials((oldValue) => {
      let updated = { ...oldValue, [name]: value };
      return updated;
    });
  };

  useEffect(() => {
    checkSession();
  }, []);

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
    );
  }
  return (
    <div>
      <h2>Hello {user.name}</h2>
      <button onClick={() => signOut()} className='btn btn-secondary'>
        logout
      </button>
    </div>
  );
};

export default AdminPage;
