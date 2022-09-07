import { OrderInterface } from "../../ts/interfaces/interfaces";
import { useAdminContext } from "../../context";
import moment from "moment";
interface Props {
  orders: OrderInterface[];
}

const OrdersComponent: React.FC<Props> = ({ orders }) => {
  const { showSelectedOrder } = useAdminContext();
  return (
    <>
      <div className='d-flex justify-content-around'>
        <p>name</p>
        <p>total</p>
        <p>date</p>
        <p>see more</p>
      </div>
      {orders.map((order: OrderInterface) => {
        return (
          <div key={order._id} className='d-flex justify-content-around'>
            <div>{order.costumer_details.name}</div>
            <div>{order.total}</div>
            <div>{moment(order.createAt).format("MMM Do YY")}</div>
            <button
              onClick={() => showSelectedOrder(order)}
              className='btn btn-secondary'
            >
              details
            </button>
          </div>
        );
      })}
    </>
  );
};

export default OrdersComponent;
