import { OrderInterface } from "../../ts/interfaces/interfaces";
import { useAdminContext } from "../../context";
import moment from "moment";
interface Props {
  orders: OrderInterface[];
}

const OrdersComponent: React.FC<Props> = ({ orders }) => {
  const { showSelectedOrder } = useAdminContext();
  return (
    <section style={{ maxWidth: "960px" }} className='m-auto'>
      <h2 className='mt-3 '>Orders</h2>
      <hr className='m-0 mb-3' />
      <div className='row justify-content-between text-center'>
        <p className='col-4 text-start'>Name</p>
        <p className='col-3 d-none d-md-block'>Date</p>
        <p className='col-3'>Total</p>
        <p className='col-2'>Details</p>
      </div>
      {orders.map((order: OrderInterface) => {
        const createdAtFormatted = moment(order.createdAt).format("MMM Do YY");
        return (
          <div
            key={order._id}
            className='row justify-content-between align-items-center my-2 text-center'
          >
            <p className='col-4 text-start'>{order.costumer_details.name}</p>
            <p className='col-3 d-none d-md-block '>{createdAtFormatted}</p>
            <p className='col-3 '>${order.total}</p>
            <button
              onClick={() =>
                showSelectedOrder({ ...order, createdAt: createdAtFormatted })
              }
              className='col-2 btn btn-outline-secondary btn-sm'
            >
              More
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default OrdersComponent;
