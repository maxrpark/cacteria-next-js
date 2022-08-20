import type { NextPage } from "next";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  type: string;
  value: string;
  labelText?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow: NextPage<Props> = ({
  name,
  type,
  value,
  labelText,
  handleChange,
}) => {
  return (
    <div className='col-12'>
      {/* <label htmlFor={name}>{labelText || name}</label> */}
      <input
        type={type}
        value={value}
        name={name}
        className='form-control'
        placeholder={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
