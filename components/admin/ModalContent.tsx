import { useAdminContext } from "../../context";

const ModalContent: React.FC = () => {
  const { selectedOrder } = useAdminContext();

  return (
    <div
      style={{ background: "rgba(0,0,0, 0.7)" }}
      className='position-fixed  h-100 w-100 top-0 left-0 d-flex justify-content-center align-items-center'
    >
      <div className='bg-white opacity-100  position-relative'>Hello</div>
    </div>
  );
};

export default ModalContent;
