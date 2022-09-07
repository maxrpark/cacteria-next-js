import { useAdminContext } from "../../context";

const ModalContent: React.FC = () => {
  const { selectedOrder } = useAdminContext();

  return (
    <div
      style={{ background: "rgba(0,0,0, 0.7)" }}
      className='position-fixed  h-100 w-100 top-0 start-0 d-flex justify-content-center align-items-center p-2'
    >
      <div
        style={{ maxWidth: "960px" }}
        className='bg-white opacity-100  position-relative container py-3 rounded'
      >
        <h2>Costumer: {selectedOrder?.costumer_details.name}</h2>
        <p className='m-0'>Email: {selectedOrder?.costumer_details.email}</p>
        <p>Date: {selectedOrder?.createdAt}</p>
        <h3>Items</h3>
        <div className='d-flex justify-content-between text-center'>
          <p>
            Name
            <span className=' invisible'>product</span>
          </p>
          <p>Amount</p>
          <p>Price</p>
          <p className='d-none d-md-inline'>Total</p>
        </div>
        <hr className='m-0 mb-3' />
        {selectedOrder?.cart_items.map((item) => {
          return (
            <div key={item.id} className='d-flex justify-content-between'>
              <p className='text-center'>${item.name}</p>
              <p className='text-center'>${item.amount}</p>
              <p className='text-center'>${item.price}</p>
              <p className='d-none d-md-inline text-center'>
                ${item.amount * item.price}
              </p>
            </div>
          );
        })}
        <hr className='m-0 mb-3' />
        <h3 className='my-2 text-end'>Total: ${selectedOrder?.total}</h3>
      </div>
    </div>
  );
};

export default ModalContent;
