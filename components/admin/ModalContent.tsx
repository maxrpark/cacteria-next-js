import { useAdminContext } from "../../context";
import { CartItemInt } from "../../ts/interfaces";

const ModalContent: React.FC = () => {
  const { selectedOrder } = useAdminContext();
  console.log(selectedOrder);

  return (
    <div
      style={{ background: "rgba(0,0,0, 0.7)" }}
      className='position-fixed  h-100 w-100 top-0 left-0 d-flex justify-content-center align-items-center p-2'
    >
      <div className='bg-white opacity-100  position-relative container py-3'>
        <h2>Costumer: {selectedOrder?.costumer_details.name}</h2>
        <p className='m-0'>Email: {selectedOrder?.costumer_details.email}</p>
        <p>Date: {selectedOrder?.createdAt}</p>
        <h3>Items</h3>
        <div className='d-flex justify-content-between text-center'>
          <p>
            Name
            <span className=' invisible'>product</span>
          </p>
          <p style={{ minWidth: "50px" }}>Amount</p>
          <p style={{ minWidth: "50px" }}>Price</p>
          <p style={{ minWidth: "50px" }} className='d-none d-md-inline'>
            Total
          </p>
        </div>
        {selectedOrder?.cart_items.map((item) => {
          return (
            <div className='d-flex justify-content-between'>
              <p style={{ minWidth: "50px" }} className='text-center'>
                {item.name}
              </p>
              <p className='text-center' style={{ minWidth: "50px" }}>
                {item.amount}
              </p>
              <p className='text-center' style={{ minWidth: "50px" }}>
                {item.price}
              </p>
              <p
                style={{ minWidth: "50px" }}
                className='d-none d-md-inline text-center'
              >
                ${item.amount * item.price}
              </p>
            </div>
          );
        })}
        <h3 className='my-2 text-end'>Total: ${selectedOrder?.total}</h3>
      </div>
    </div>
  );
};

export default ModalContent;
