import { useAdminContext } from "../../context";
import ModalContent from "./ModalContent";

const OrderModal: React.FC = () => {
  const { showOrderModal, closeOrderModal } = useAdminContext();
  return (
    <div
      className={`${showOrderModal ? "d-block" : "d-none"} position-relative `}
    >
      <button
        onClick={closeOrderModal}
        style={{ zIndex: 1, top: "10px", right: "20px" }}
        type='button'
        className='close position-fixed bg-transparent border-0'
      >
        <span className='display-4 text-light' aria-hidden='true'>
          &times;
        </span>
      </button>
      <ModalContent />
    </div>
  );
};

export default OrderModal;
