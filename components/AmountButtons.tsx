import type { NextPage } from "next";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const AmountButtons: NextPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-2'>
      <button className='btn btn-secondary btn-sm'>
        <MdOutlineKeyboardArrowUp />
      </button>
      <h3 className='m-0'>amount</h3>
      <button className='btn btn-secondary btn-sm'>
        <MdOutlineKeyboardArrowDown />
      </button>
    </div>
  );
};

export default AmountButtons;
