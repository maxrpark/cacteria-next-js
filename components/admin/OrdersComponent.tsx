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
      <div className='d-flex justify-content-between'>
        <p>Name</p>
        <p>Total</p>
        <p>Date</p>
        <p>Details</p>
      </div>
      {orders.map((order: OrderInterface) => {
        const createdAtFormatted = moment(order.createdAt).format("MMM Do YY");
        return (
          <div
            key={order._id}
            className='d-flex justify-content-between align-items-center'
          >
            <p className='m-0'>{order.costumer_details.name}</p>
            <p className='m-0'>{order.total}</p>
            <p className='m-0'>{createdAtFormatted}</p>
            <button
              onClick={() =>
                showSelectedOrder({ ...order, createdAt: createdAtFormatted })
              }
              className='btn btn-outline-secondary btn-sm'
            >
              More
            </button>
          </div>
        );
      })}
    </>
  );
};

export default OrdersComponent;
