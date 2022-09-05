import React, { useEffect } from "react";
import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { useAdminContext } from "../../context";
import { LoginForm } from "../../components";

const AdminPage: NextPage = () => {
  const { checkSession, isLoading, user } = useAdminContext();

  useEffect(() => {
    checkSession();
  }, []);

  if (isLoading) {
    return (
      <main className='page-height d-flex justify-content-center align-items-center'>
        Loading...
      </main>
    );
  }
  if (!user?.name) {
    return <LoginForm />;
  }
  return (
    <main className='page-height'>
      <h2>Hello {user.name}</h2>
      <button onClick={() => signOut()} className='btn btn-secondary'>
        logout
      </button>
    </main>
  );
};

export default AdminPage;
