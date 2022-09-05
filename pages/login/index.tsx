import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { LoginForm } from "../../components";

const LoginPage: NextPage = () => {
  return <LoginForm />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await getSession(ctx);
  if (res?.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/admin",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};

export default LoginPage;
