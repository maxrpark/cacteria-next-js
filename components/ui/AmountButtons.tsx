import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface Props {
  increase: () => void;
  decrease: () => void;
  amount: number;
}

const AmountButtons: React.FC<Props> = ({ increase, decrease, amount }) => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
      <button className='btn btn-secondary btn-sm' onClick={increase}>
        <MdOutlineKeyboardArrowUp />
      </button>
      <h3 className='m-0'>{amount}</h3>
      <button className='btn btn-secondary btn-sm' onClick={decrease}>
        <MdOutlineKeyboardArrowDown />
      </button>
    </div>
  );
};

export default AmountButtons;
