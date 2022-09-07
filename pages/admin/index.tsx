import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import connectDB from "../../backend/connectDB/connectDB";
import Order from "../../backend/models/Orders";
import { signOut, getSession } from "next-auth/react";
import { OrderInterface } from "../../ts/interfaces/interfaces";

import { OrdersComponent, OrderModal } from "../../components";

interface Props {
  user: any;
  orders: OrderInterface[];
}
const AdminPage: NextPage<Props> = ({ user, orders }) => {
  return (
    <main className='page-height'>
      <h2>Hello {user!.name}</h2>
      <button onClick={() => signOut()} className='btn btn-secondary'>
        logout
      </button>
      <OrdersComponent orders={orders} />
      <OrderModal />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await getSession(ctx);

  if (res?.user !== undefined) {
    await connectDB(process.env.MONGO_URL as string);
    const orders = await Order.find({});

    return {
      props: {
        user: res.user,
        orders: JSON.parse(JSON.stringify(orders)),
      },
    };
  }

  return {
    redirect: {
      permanent: true,
      destination: "/login",
    },
    props: {},
  };
};

export default AdminPage;
