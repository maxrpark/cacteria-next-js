import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import connectDB from "../../backend/connectDB/connectDB";
import Order from "../../backend/models/Orders";
import { signOut, getSession } from "next-auth/react";
import { OrderInterface } from "../../ts/interfaces/interfaces";

import { OrdersComponent, OrderModal } from "../../components";

interface Props {
  user: {
    email: string;
    name: string;
  };
  orders: OrderInterface[];
}
const AdminPage: NextPage<Props> = ({ user, orders }) => {
  return (
    <main className='page-height container'>
      <div className='d-flex justify-content-between gap-2 p-3 my-1'>
        <h2 className='m-0 text-center w-100'>Hello {user!.name}</h2>
        <button onClick={() => signOut()} className='btn btn-dark btn-sm'>
          Logout
        </button>
      </div>
      <h2 style={{ maxWidth: "960px" }} className='mt-3 m-auto '>
        Orders
      </h2>
      <div
        style={{ maxHeight: "600px" }}
        className='m-auto overflow-scroll p-2'
      >
        <OrdersComponent orders={orders} />
      </div>
      <OrderModal />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await getSession(ctx);

  if (res?.user !== undefined) {
    await connectDB(process.env.MONGO_URL as string);
    const orders = await Order.find({}).sort("-createdAt");

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
